import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/app.state';
import { DataService } from 'src/app/_services/data.service';
import { StatisticActions, UpgradesActions, ActualUpgradesActions } from '../../store/actions';

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
    this.store.dispatch(new UpgradesActions.GetUpgrades());
    this.store.dispatch(new ActualUpgradesActions.GetUpgrades());
  }

  submit() {
    this.sc.login(this.login.value).subscribe(res =>{
    this.store.dispatch(new StatisticActions.GetStatistic({username: this.f.username.value}));
    localStorage.setItem('actualUser', this.f.username.value);
    this.router.navigate(['/game']);
  })
  }

  register() {
    this.router.navigate(['/register']);
  }

  get f() {
    return this.login['controls'];
  }
}
