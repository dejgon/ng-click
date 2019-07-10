import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, createSelector } from '@ngrx/store';
import { Score } from '../../store/models/score.model'; 
import { AppState } from '../../store/app.state';
import * as ScoreActions from '../../store/actions/score.actions';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  score: Observable<Score>;
  constructor(private store: Store<AppState>) { 
    this.score = store.select('score');
    setInterval(() => this.store.dispatch(new ScoreActions.AddScore({score: 1})),1000);
  }

  ngOnInit() {
    
  }

  bought(){
    this.store.dispatch( new ScoreActions.AddScore({score: 1}) );
  }

}
