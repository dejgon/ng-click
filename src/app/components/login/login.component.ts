import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/app.state';
import { DataService } from 'src/app/_services/data.service';
import { UpgradesActions, ActualUpgradesActions, UserStatsIdActions } from '../../store/actions';

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
    if (localStorage.getItem("aaa") === null) {
      this.store.dispatch(new UpgradesActions.GetInitialData());
      this.store.dispatch(new ActualUpgradesActions.GetInitialData());
    }
  }
  
  submit() {
    this.sc.login({ username: this.f.username.value, password: this.f.password.value }).subscribe(res => {
      this.store.dispatch(new UserStatsIdActions.SaveUserStatsId({ userStatsId: res['stats'].id, username: res['stats'].username }));
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
