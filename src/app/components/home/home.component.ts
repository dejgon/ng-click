import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, createSelector } from '@ngrx/store';

import { AppState } from '../../store/app.state';
import { Statistic, Upgrades } from '../../store/models';
import { StatisticActions, ActualUpgradesActions, UpgradesActions } from '../../store/actions';
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
    
    setInterval(() => {   // Save to database
      this.upgradeStats();
    }, 3000)
    setInterval(() => {  // "tick"
      this.tick();
    }, 1000);
  }

  upgradeStats() {
    this.statistic.subscribe(res => {
      if (res === undefined || res.upgradeLvls === undefined) {
        console.log("Błędny zapis");
      } else {
        console.log("ZAPISYWANIE")
        let userStats = {
          id: res.id,
          username: res.username,
          score: res.score,
          money: res.money,
          pointsPerClick: res.pointsPerClick,
          pointsPerSecond: res.pointsPerSecond,
          clicks: res.clicks,
          scoreFromClicks: res.scoreFromClicks,
          scoreFromSecond: res.scoreFromSecond,
          upgradeLvls: res.upgradeLvls
        }
        this.data.updateStats(res.id, userStats).subscribe(res => {
        }), err => { console.log(err) };
      }
    }).unsubscribe();
  }

  click() {
    this.store.dispatch(new StatisticActions.ClickEvent());
  }

  tick() {
    this.store.dispatch(new StatisticActions.TickEvent());
  }

  upgrade(id: any) {
    this.statistic.subscribe(resStat => {
      this.store.select('actualUpgrades').subscribe(resUpgrades => {
        if (resStat.money >= resUpgrades[id].cost) {
          this.store.dispatch(new ActualUpgradesActions.Buy(id));
        } else {
          console.log("Brakuje Ci: " + [resUpgrades[id].cost - resStat.money] + "!")
        }
      })
    })
  }
}