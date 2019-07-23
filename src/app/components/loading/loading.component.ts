import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/app.state';
import { Router } from '@angular/router';
import { DataService } from 'src/app/_services/data.service';
import { UpgradesActions, ActualUpgradesActions, StatisticActions } from 'src/app/store/actions';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(private store: Store<AppState>,
    private router: Router,
    private sc: DataService) { }

  ngOnInit() {
    /*
    this.store.dispatch(new UpgradesActions.GetUpgrades());
    this.store.dispatch(new ActualUpgradesActions.GetUpgrades());
    this.store.dispatch(new StatisticActions.GetStatistic({username: localStorage.getItem('user')}));
    */
    this.router.navigate(['/game']);
  }
}
