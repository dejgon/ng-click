import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from 'src/app/_services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup
  constructor(
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
  get f() {
    return this.login['controls'];
  }
  submit() {
    //this.router.navigate(['/game']);

    this.sc.login({ username: this.f.username.value , password: this.f.password.value }).subscribe(res => {
      if(res['statusCode'] == "200"){
        this.router.navigate(['/game']);
      }
      
    })
  }
  register() {
    this.router.navigate(['/register']);
  }
}
