import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, createSelector } from '@ngrx/store';

import { AppState } from '../../store/app.state';
import {Money, AllScore, Multiplier } from '../../store/models';
import { MoneyActions, AllScoreActions, MultiplierActions, UpgradesActions, ActualUpgradesActions } from '../../store/actions';
import { DataService } from '../../_services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  score: Observable<Money>;
  allScore: Observable<AllScore>
  multiplier: Observable<Multiplier>;
  upgradeLvl: Observable<any>;
  upgrades: any;

  actualUpgrades: Observable<any>;
  constructor(private store: Store<AppState>, private data: DataService) {
      this.score = store.select('score');
      this.allScore = store.select('allScore');
      this.multiplier = store.select('multiplier');
      this.upgradeLvl = store.select('upgrades');
      this.actualUpgrades = store.select('actualUpgrades');
  }

  ngOnInit() {
    if(localStorage.getItem("aaa") === null){

      this.DataOnStart(); // Loading all user statistics..
     
      setInterval(() => {   // Save to database (5s)
        this.upgradeStats();
      }, 5000)   

      setInterval(() => {  // "tick"
        this.tick();
      }, 1000);
    }
    this.getAllUpgrades();
    localStorage.setItem('aaa', "1");
  }

  DataOnStart() {
    this.store.subscribe(res => {
      this.data.getStatsById(res.userStatsId.userStatsId).subscribe(stats => {
        this.store.dispatch(new AllScoreActions.AddAllScore({ allScore: stats['score'] }));
        this.store.dispatch(new MoneyActions.AddMoney({ score: stats['money'] }));
        for (let item of stats['upgradeLvls']) {
          this.store.dispatch(new UpgradesActions.IncrementValue({ upgradeId: item.upgradeId, upgradeLvl: item.upgradeLvl }))
        }
        this.store.dispatch(new MultiplierActions.IncrementMult({ pointsPerClick: stats['pointsPerClick'], pointsPerSecond: stats['pointsPerSecond'] }))
      })
    }).unsubscribe();
  }

  upgradeStats() {
    this.store.subscribe(res => {
      let userStats = {
        id: res.userStatsId.userStatsId,
        username: res.userStatsId.username,
        score: res.allScore.allScore,
        money: res.score.score,
        pointsPerClick: res.multiplier.pointsPerClick,
        pointsPerSecond: res.multiplier.pointsPerSecond,
        clicks: 0,
        scoreFromClicks: 0,
        scoreFromSecond: 0,
        upgradeLvls: res.upgrades
      }
      this.data.updateStats(res.userStatsId.userStatsId, userStats).subscribe(res => {
      }), err => { console.log(err) };
    }).unsubscribe();
  }

  click() {
    this.multiplier.subscribe(res => {
      var points = 1 * res.pointsPerClick;
      this.store.dispatch(new MoneyActions.AddMoney({ score: points }));
      this.store.dispatch(new AllScoreActions.AddAllScore({ allScore: points }));
    })
  }

  getAllUpgrades() {
    this.data.getAllUpgrades().subscribe(res => {
      this.upgrades = res;
    })
  }

  tick() {
    this.multiplier.subscribe(res => {
      var points = 1 * res.pointsPerSecond;
      this.store.dispatch(new MoneyActions.AddMoney({ score: points }));
      this.store.dispatch(new AllScoreActions.AddAllScore({ allScore: points }));
    })
  }

  upgrade(id: any) {
    this.score.subscribe(resScore => {
      this.store.select('upgrades').subscribe(res => {
        var actualPointsPerClick = (res[id].upgradeLvl + 1) * (this.upgrades[id].pointsPerClick);
        var actualPointsPerSecond = (res[id].upgradeLvl + 1) * (this.upgrades[id].pointsPerSecond);
        var actualPrice = (res[id].upgradeLvl + 1) * (this.upgrades[id].cost);
        this.store.dispatch(new ActualUpgradesActions.IncrementActualUpgradesValue({ upgradeId: id, pointsPerClick: actualPointsPerClick, pointsPerSecond: actualPointsPerSecond, cost: actualPrice }));
        this.store.select('actualUpgrades').subscribe(res => {
        })
        if (actualPrice <= resScore.score) {
          this.store.dispatch(new UpgradesActions.IncrementValue({ upgradeId: id, upgradeLvl: 1 }));
          this.store.dispatch(new MoneyActions.SubtractMoney({ score: actualPrice }));
          this.store.dispatch(new MultiplierActions.IncrementMult({ pointsPerClick: actualPointsPerClick, pointsPerSecond: actualPointsPerSecond }));
        }

      })
    })
  }
}
