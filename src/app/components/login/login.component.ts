import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/app.state';
import { DataService } from 'src/app/_services/data.service';

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
  }

  submit() {
    this.sc.login(this.login.value).subscribe(res => {
      localStorage.clear();
      localStorage.setItem('token', res['token']);
      localStorage.setItem('user', this.f.username.value);
      this.router.navigate(['/loading']);
    })
  }

  register() {
    this.router.navigate(['/register']);
  }

  get f() {
    return this.login['controls'];
  }
}
