import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  users: any[] = [];
  constructor(private router: Router, private sc: DataService) {

  }

  ngOnInit() {
    this.sc.getAllStats().subscribe(res => {
      console.log(res);
      for (let item of res['values']) {
        var obj = {
          username: item.username,
          score: item.score
        }
        this.users.push(obj);
      }
    }) 
    console.log(this.users);
  }

  play() {
    this.router.navigate(['/login'])
  }

}
