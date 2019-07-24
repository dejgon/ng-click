import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/store/app.state';
import { Router } from '@angular/router';
import { DataService } from 'src/app/_services/data.service';

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
    this.router.navigate(['/game']);
  }
}
