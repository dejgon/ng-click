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
export class HomeComponent implements OnInit, OnDestroy {

  statistic: Observable<Statistic>;
  upgradeLvl: Observable<any>;
  staticUpgrades: any;
  actualUpgrades: Observable<any>;
  timer1: any;
  timer2: any;
  text: string = "Hide";
  time: any;
  clicksPerSecond: Observable<any>;
  window: boolean = true;
  username: string = localStorage.getItem('user');
  constructor(private store: Store<AppState>, private data: DataService) {
    this.staticUpgrades = store.select('upgrades');
    this.actualUpgrades = store.select('actualUpgrades');
    this.statistic = store.select('statistic');
  }

  ngOnInit() {
    
    this.store.dispatch(new UpgradesActions.GetUpgrades());
    this.store.dispatch(new ActualUpgradesActions.GetUpgrades());
    this.store.dispatch(new StatisticActions.GetStatistic({username: localStorage.getItem('user')}));
    this.timer1 = setInterval(() => {   // Save to database
      this.upgradeStats();
    }, 1000)

    this.timer2 = setInterval(() => {  // "tick"
      this.tick();
    }, 1000);
  }
  ngOnDestroy(){
    clearInterval(this.timer1);
    clearInterval(this.timer2);
    localStorage.removeItem('token');
  }

    toHHMMSS(value) {
    var hours   = Math.floor(value / 3600);
    var minutes = Math.floor((value - (hours * 3600)) / 60);
    var seconds = value - (hours * 3600) - (minutes * 60);
    var hh:string;
    var mm: string;
    var ss: string;
    if (hours   < 10) {hh = "0"+ hours;}
    if (minutes < 10) {mm = "0"+minutes;}
    if (seconds < 10) {ss = "0"+seconds;}
    return hh+':'+mm+':'+ss;
}

  upgradeStats() {
    this.statistic.subscribe(res => {
      if (res === undefined || res.upgradeLevels === undefined) {
        console.log("Błędny zapis");
      } else {
        let userStats = {
          score: res.score,
          money: res.money,
          pointsPerClick: res.pointsPerClick,
          pointsPerSecond: res.pointsPerSecond,
          clicks: res.clicks,
          scoreFromClicks: res.scoreFromClicks,
          scoreFromSecond: res.scoreFromSecond,
          timePlayed: res.timePlayed,
          upgradeLevels: res.upgradeLevels
        }
        this.data.updateStats(localStorage.getItem('user'), userStats, localStorage.getItem('token')).subscribe(res=>{
        })
      }
    }).unsubscribe();
  }

  openWindow(){
    this.window = !this.window;
    if(this.window == true){
      this.text = "Hide"
    }else{
      this.text = "Open"
    }
  }
  click() {
    this.store.dispatch(new StatisticActions.ClickEvent());
  }

  tick() {
    this.store.dispatch(new StatisticActions.TickEvent());
    this.statistic.subscribe(res=>{
     this.time = this.statistic.subscribe(res => {
        let value = res.timePlayed;
        var hours   = Math.floor(value / 3600);
        var minutes = Math.floor((value - (hours * 3600)) / 60);
        var seconds = value - (hours * 3600) - (minutes * 60);
        var hh:string;
        var mm: string;
        var ss: string;
        if (hours   < 10) {hh = "0"+ hours;}
        if (minutes < 10) {mm = "0"+minutes;}
        if (seconds < 10) {ss = "0"+seconds;}
        return hh+':'+mm+':'+ss;
      }).unsubscribe();
    })
  }

  upgrade(id: any) {
    this.statistic.subscribe(resStat => {
      this.store.select('actualUpgrades').subscribe(resUpgrades => {
        if (resStat.money >= resUpgrades[id].cost) {
          this.store.dispatch(new ActualUpgradesActions.Buy(id));
        }
      })
    })
  }
}