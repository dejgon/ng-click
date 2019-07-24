import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {

    private url = 'https://localhost:44335/api';
    private url2 = 'http://192.168.2.223/api';
    private token = 'Bearer ' + localStorage.getItem('token');
    private tokenAuth: any;
    private tokenAuth2: any;
    constructor(private http: HttpClient) { }

    getAllUpgrades() {
        return this.http.get(this.url + '/upgrades')
    }
    login(data) {
        return this.http.post(this.url + '/users/login', data)
    }
    register(data) {
        return this.http.post(this.url + '/users/register', data)
    }
    updateStats(username, data, token2) {
        this.tokenAuth2 = {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token2,
            }),
        };
        return this.http.put(this.url + '/users/update/' + username, data, this.tokenAuth2)
    }
    getAllStats() {
        return this.http.get(this.url + '/users/stats')
    }
    getStatsById(id: any) {
        return this.http.get(this.url + "/user/stats/" + id)
    }
    getStatsByUsername(username: any, token2: any) {
         this.tokenAuth = {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token2,
            }),
        };
        return this.http.get(this.url + "/Users/" + username, this.tokenAuth)
    }
}