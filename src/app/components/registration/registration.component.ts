import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DataService } from 'src/app/_services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  register: FormGroup;
  constructor(
    private fb: FormBuilder,
    private data: DataService,
    private router: Router) {
    
   }

  ngOnInit() {
    this.register = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    })
  }
  
  submit(){
    this.data.register({username: this.f.username.value, password: this.f.password.value}).subscribe(res => {
      console.log(res);
  
      this.router.navigate(['/login']);
    }, error => {console.log(error)});
  }
  
  get f() {
    return this.register['controls'];
  }
}
