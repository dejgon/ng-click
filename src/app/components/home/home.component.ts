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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  score: Observable<Score>;
  allScore: Observable<AllScore>
  multiplier: Observable<Multiplier>;
  upgrades = [
    {
      name: 'Spell1',
      pointsPerClick: 1,
      pointsPerSec: 0,
      price: 10
    },
    {
      name: 'Spell2',
      pointsPerClick: 0,
      pointsPerSec: 1,
      price: 100
    }
  ];

  constructor(private store: Store<AppState>) {
    this.score = store.select('score');
    this.allScore = store.select('allScore');
    this.multiplier = store.select('multiplier');

  }

  ngOnInit() {
   
      
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

  tick() {
    this.multiplier.subscribe(res => {
      console.log(res.pointsPerSecond);
      var points = 1 * res.pointsPerSecond;

      this.store.dispatch(new ScoreActions.AddScore({ score: points }));
      this.store.dispatch(new AllScoreActions.AddAllScore({ allScore: points }));
    })
  }

  upgrade(id: any) {

    this.score.subscribe(resScore => {
      this.store.select('upgrades').subscribe(resUpgrades => {
        var level = resUpgrades[id].upgradeLevel;
        var price = this.upgrades[id].price;
        var actualPrice = Math.round((price * Math.pow(1.3, level)));
        

        if (resScore.score < actualPrice) {
          console.log("Cena jest zbyt wysoka! Wynosi: " + actualPrice.toFixed(2));
          return null;
        } else {
          this.upgrades[id].price = actualPrice;
          this.store.dispatch(new UpgradesActions.IncrementValue({ idUpgrade: id, upgradeLevel: 0 }));
          this.store.dispatch(new ScoreActions.SubtractScore({ score: actualPrice }));
          this.store.dispatch(new MultiplierActions.IncrementMult({ pointsPerClick: this.upgrades[id].pointsPerClick, pointsPerSecond: this.upgrades[id].pointsPerSec }));
          console.log("Ulepszenie zakupione!");
        }
      })
    })

  }
  upgradeSeconds() {
    this.store.dispatch(new MultiplierActions.IncrementMult({ pointsPerClick: 0, pointsPerSecond: 1 }));
  }

}
