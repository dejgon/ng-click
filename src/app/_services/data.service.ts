import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {

    private url = 'https://localhost:44335/api';
    constructor(private http: HttpClient) { }
    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            responseType: 'text' as 'json',
        }),
    };
    private tokenAuth = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        }),
    };

    getAllUpgrades() {
        return this.http.get(this.url + '/upgrades')
    }
    login(data) {
        return this.http.post(this.url + '/users/login', data)
    }
    register(data) {
        return this.http.post(this.url + '/users/register', data, this.httpOptions)
    }
    updateStats(id, data) {
        return this.http.put(this.url + '/stats/' + id, data)
    }
    getAllStats() {
        return this.http.get(this.url + '/users/stats')
    }
    getStatsById(id: any) {
        return this.http.get(this.url + "/user/stats/" + id)
    }
    getStatsByUsername(username: any) {
        console.log(localStorage.getItem("token"));
        console.log(this.tokenAuth);
        return this.http.get(this.url + "/Users/" + username,this.tokenAuth)
    }
}