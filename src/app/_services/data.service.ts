import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

    private url = 'https://localhost:44335/api';
    constructor(private http: HttpClient) {
    }

    getAllUpgrades(){
        return this.http.get(this.url + '/upgrades');
    }
    login(data) {
        return this.http.post(this.url + '/login', data)
    }
    register(data) {
        return this.http.post(this.url + '/users', data);
    }
}