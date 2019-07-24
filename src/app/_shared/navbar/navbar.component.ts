import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/app.state';
import { Logout } from 'src/app/store/actions/logout.action';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }
  clear() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.store.dispatch(new Logout());
  }
}
