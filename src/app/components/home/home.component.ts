import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, createSelector } from '@ngrx/store';

import { AppState } from '../../store/app.state';
import { Statistic, Upgrades } from '../../store/models';
import { StatisticActions } from '../../store/actions';
import { DataService } from '../../_services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  statistic: Observable<Statistic>;
  upgradeLvl: Observable<any>;
  staticUpgrades: any;

  actualUpgrades: Observable<any>;
  constructor(private store: Store<AppState>, private data: DataService) {
    this.staticUpgrades = store.select('upgrades');
    this.actualUpgrades = store.select('actualUpgrades');
    this.statistic = store.select('statistic');
  }

  ngOnInit() {
    /*
       setInterval(() => {   // Save to database (5s)
         this.upgradeStats();
       }, 5000)  */
    setInterval(() => {  // "tick"
      this.tick();
    }, 1000);
  }

  upgradeStats() {
    /*
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
    */
  }

  click() {
    this.store.dispatch(new StatisticActions.ClickEvent());
  }

  tick() {
    this.store.dispatch(new StatisticActions.TickEvent());
  }

  upgrade(id: any) {

  }
}
