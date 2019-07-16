import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/_services/data.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import * as ScoreActions from '../../store/actions/score.actions';
import * as AllScoreActions from '../../store/actions/allScore.actions';
import * as MultiplierActions from '../../store/actions/multiplier.actions';
import * as UpgradesActions from '../../store/actions/upgrades.action';
import * as ActualUpgradesActions from '../../store/actions/actualUpgrades.action';
import * as  UserStatsIdActions from '../../store/actions/userStatsId.actions';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup
 
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private fb: FormBuilder,
    private sc: DataService) {
    this.login = this.fb.group({
      username: [''],
      password: ['']
    })
  }

  ngOnInit() {    
    if(localStorage.getItem("aaa") === null){  
      this.store.dispatch(new UpgradesActions.GetInitialData());
      this.store.dispatch(new ActualUpgradesActions.GetInitialData());
    }
   
    
  }
  get f() {
    return this.login['controls'];
  }
  submit() {
    

    this.sc.login({ username: this.f.username.value , password: this.f.password.value }).subscribe(res => {
      
        this.store.dispatch(new UserStatsIdActions.SaveUserStatsId({userStatsId: res['stats'].id , username: res['stats'].username}));
        localStorage.setItem('actualUser', this.f.username.value);
        

        this.router.navigate(['/game']);  
    })
  }
  register() {
    this.router.navigate(['/register']);
  }
  
}
