import { Component, OnInit } from '@angular/core';
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
import { DataService } from '../../_services/data.service';
import { Upgrades } from 'src/app/_shared/upgrades/upgrades';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  score: Observable<Score>;
  allScore: Observable<AllScore>
  multiplier: Observable<Multiplier>;
  upgrades: any;
  upgradeLevel: Observable<Upgrades>;
  deactivated: boolean;
  flag: number[] = [0,0];
  constructor(private store: Store<AppState>, private data: DataService) {
    this.score = store.select('score');
    this.allScore = store.select('allScore');
    this.multiplier = store.select('multiplier');
    this.upgradeLevel = store.select('upgrades');

  }

  ngOnInit() {

    this.getAllUpgrades();
    setInterval(() => {
      this.tick();
    }, 1000);
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
      console.log(res);
      this.upgrades = res;
    })
  }

  tick() {
    this.multiplier.subscribe(res => {
      console.log(res.pointsPerSecond);
      var points = 1 * res.pointsPerSecond;

      this.store.dispatch(new ScoreActions.AddScore({ score: points }));
      this.store.dispatch(new AllScoreActions.AddAllScore({ allScore: points }));
    })
  }

  upgrade(id: any) {
    var maxUpgradeLevel = this.upgrades[id].levels.length;
    this.score.subscribe(resScore => {
      this.store.select('upgrades').subscribe(resUpgrades => {
        var level = resUpgrades[id].upgradeLevel;

        var price = this.upgrades[id].levels[level].cost;

        if (resScore.score < price) {
          console.log("Cena jest zbyt wysoka! Wynosi: " + price.toFixed(2));
          return null;
        } else {
          if (level < (maxUpgradeLevel - 1)) {
            this.store.dispatch(new UpgradesActions.IncrementValue({ idUpgrade: id, upgradeLevel: 0 }));
          } else {

            if (this.flag[id] === 0) {
              this.store.dispatch(new ScoreActions.SubtractScore({ score: price }));
              this.store.dispatch(new MultiplierActions.IncrementMult({ pointsPerClick: this.upgrades[id].levels[level].pointsPerClick, pointsPerSecond: this.upgrades[id].levels[level].pointsPerSecond }));
            }else{
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

  }
  upgradeSeconds() {
    this.store.dispatch(new MultiplierActions.IncrementMult({ pointsPerClick: 0, pointsPerSecond: 1 }));
  }

}
