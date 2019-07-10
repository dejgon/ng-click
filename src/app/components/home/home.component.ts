import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, createSelector } from '@ngrx/store';
import { Score } from '../../store/models/score.model'; 
import { AppState } from '../../store/app.state';
import * as ScoreActions from '../../store/actions/score.actions';
import * as MultiplierActions from '../../store/actions/multiplier.actions';
import { Multiplier } from 'src/app/store/models/multiplier.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  score: Observable<Score>;
  multiplier: Observable<Multiplier>;

  constructor(private store: Store<AppState>) { 
    this.score = store.select('score');
    this.multiplier = store.select('multiplier');
  }

  ngOnInit() {
    setInterval(() => {
      this.tick();
    }, 1000);
    this.score.subscribe(res => {

    })
  }

  click(){
    this.multiplier.subscribe(res => {
      var points = 1 * res.pointsPerClick;
      this.store.dispatch(new ScoreActions.AddScore({score: points}));
    })
  }

  tick(){
    this.multiplier.subscribe(res => {
      var points = 1 * res.pointsPerSecond;
      this.store.dispatch(new ScoreActions.AddScore({score: points}));
    })
  }
    
  upgrade(){
    this.score.subscribe(res => {
      if (res.score < 10){
        return null;
      }else {
        this.store.dispatch(new ScoreActions.SubtractScore({score: 10}));
    this.store.dispatch(new MultiplierActions.IncrementMult({pointsPerClick: 1, pointsPerSecond: 0}));
      }
    })
    
  }
  upgradeSeconds(){
    this.store.dispatch(new MultiplierActions.IncrementMult({pointsPerClick: 0, pointsPerSecond: 1}));
  }
  
}
