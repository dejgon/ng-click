import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  users:any;
  constructor(private router: Router) {

  }

  ngOnInit() {
    this.users= [
      {
        name: 'fiolcyk',
        points: 1111
      },
      {
        name: 'dejgoneł',
        points: 1110
      }
    ]

    console.log(this.users);
  }

  play() {
    this.router.navigate(['/login'])
  }

}
