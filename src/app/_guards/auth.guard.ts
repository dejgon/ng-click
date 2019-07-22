import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private store: Store<AppState>) {
    }

    canActivate() {
        
       if(localStorage.getItem('token') === null){
           return false;
       }
        return true;
       
    }
}