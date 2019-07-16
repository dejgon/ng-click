import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, createSelector } from '@ngrx/store';
// state
import { AppState } from '../../store/app.state';
//models
import { Score, AllScore } from '../../store/models/score.model';
import { Multiplier } from 'src/app/store/models/multiplier.model';
//actions
import * as ScoreActions from '../../store/actions/score.actions';
import * as AllScoreActions from '../../store/actions/allScore.actions';
import * as MultiplierActions from '../../store/actions/multiplier.actions';
import * as UpgradesActions from '../../store/actions/upgrades.action';
import * as ActualUpgradesActions from '../../store/actions/actualUpgrades.action';
import { DataService } from '../../_services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  score: Observable<Score>;
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
      this.DataOnStart();
      

      setInterval(() => {
        this.upgradesStats();
      }, 5000)
      
      
      setInterval(() => {
        this.tick();
      }, 1000);
      
    }
    this.getAllUpgrades();
    localStorage.setItem('aaa', "1");

  }
  ngOnDestroy(){
    clearInterval();
  }

  DataOnStart() {
    this.store.subscribe(res => {

      this.data.getStatsById(res.userStatsId.userStatsId).subscribe(stats => {

        console.log(stats);
        this.store.dispatch(new AllScoreActions.AddAllScore({ allScore: stats['score'] }));
        this.store.dispatch(new ScoreActions.AddScore({ score: stats['money'] }));
        for (let item of stats['upgradeLvls']) {
          this.store.dispatch(new UpgradesActions.IncrementValue({ upgradeId: item.upgradeId, upgradeLvl: item.upgradeLvl }))
        }
        this.store.dispatch(new MultiplierActions.IncrementMult({ pointsPerClick: stats['pointsPerClick'], pointsPerSecond: stats['pointsPerSecond'] }))

      })
    }).unsubscribe();
  }

  upgradesStats() {
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

      //console.log({message: "asdasd"} ,userStats);

    }).unsubscribe();



  }

  click() {
    this.multiplier.subscribe(res => {
      var points = 1 * res.pointsPerClick;
      this.store.dispatch(new ScoreActions.AddScore({ score: points }));
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
      this.store.dispatch(new ScoreActions.AddScore({ score: points }));
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
          this.store.dispatch(new ScoreActions.SubtractScore({ score: actualPrice }));
          this.store.dispatch(new MultiplierActions.IncrementMult({ pointsPerClick: actualPointsPerClick, pointsPerSecond: actualPointsPerSecond }));
        }

      })
    })




    /*
        var maxUpgradeLevel = this.upgrades[id].levels.length;
    this.score.subscribe(resScore => {
      this.store.select('upgrades').subscribe(resUpgrades => {
        var level = resUpgrades[id].upgradeLvl;
    
        var price = this.upgrades[id].levels[level].cost;
    
        if (resScore.score < price) {
          console.log("Cena jest zbyt wysoka! Wynosi: " + price.toFixed(2));
          return null;
        } else {
          if (level < (maxUpgradeLevel - 1)) {
            this.store.dispatch(new UpgradesActions.IncrementValue({ upgradeId: id, upgradeLvl: 1 }));
          } else {
    
            if (this.flag[id] === 0) {
              this.store.dispatch(new ScoreActions.SubtractScore({ score: price }));
              this.store.dispatch(new MultiplierActions.IncrementMult({ pointsPerClick: this.upgrades[id].levels[level].pointsPerClick, pointsPerSecond: this.upgrades[id].levels[level].pointsPerSecond }));
            } else {
              return null;
            }
            this.flag[id] += 1;
            return null;
          }
          this.store.dispatch(new ScoreActions.SubtractScore({ score: price }));
          this.store.dispatch(new MultiplierActions.IncrementMult({ pointsPerClick: this.upgrades[id].levels[level].pointsPerClick, pointsPerSecond: this.upgrades[id].levels[level].pointsPerSecond }));
    
          console.log("Ulepszenie zakupione!");
        }
      })
    })
    */
  }
}
