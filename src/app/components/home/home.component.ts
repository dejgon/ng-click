import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, createSelector } from '@ngrx/store';
import { Score, AllScore } from '../../store/models/score.model';
import { AppState } from '../../store/app.state';
import * as ScoreActions from '../../store/actions/score.actions';
import * as AllScoreActions from '../../store/actions/allScore.actions';
import * as MultiplierActions from '../../store/actions/multiplier.actions';
import { Multiplier } from 'src/app/store/models/multiplier.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  score: Observable<Score>;
  allScore: Observable<AllScore>
  multiplier: Observable<Multiplier>;
  upgrades = [];
  constructor(private store: Store<AppState>) {
    this.score = store.select('score');
    this.allScore = store.select('allScore');
    this.multiplier = store.select('multiplier');
  }

  ngOnInit() {
    this.upgrades = [
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
    setInterval(() => {
      this.tick();
    }, 1000);
  }

  click() {
    this.multiplier.subscribe(res => {
      var points = 1 * res.pointsPerClick;
      this.store.dispatch(new ScoreActions.AddScore({ score: points }));
      this.store.dispatch(new AllScoreActions.AddAllScore({allScore: points}));
    })
  }

  tick() {
    this.multiplier.subscribe(res => {
      var points = 1 * res.pointsPerSecond;

      this.store.dispatch(new ScoreActions.AddScore({ score: points }));
      this.store.dispatch(new AllScoreActions.AddAllScore({allScore: points}));
    })
  }

  upgrade(id: any) {

    this.score.subscribe(res => {
      if (res.score < this.upgrades[id].price) {
        console.log("Cena jest zbyt wysoka!");
        return null;
      } else {
        console.log("Ulepszenie zakupione!");
        this.store.dispatch(new ScoreActions.SubtractScore({ score: this.upgrades[id].price }));
        this.store.dispatch(new MultiplierActions.IncrementMult({ pointsPerClick: this.upgrades[id].pointsPerClick, pointsPerSecond: this.upgrades[id].pointsPerSec }));
      }
    })

  }
  upgradeSeconds() {
    this.store.dispatch(new MultiplierActions.IncrementMult({ pointsPerClick: 0, pointsPerSecond: 1 }));
  }

}
