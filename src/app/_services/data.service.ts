import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

    private url = 'http://192.168.2.223/api';
    constructor(private http: HttpClient) {}

    getAllUpgrades(){
        return this.http.get(this.url + '/upgrades')
    }
    login(data) {
        return this.http.post(this.url + '/login', data)
    }
    register(data) {
        return this.http.post(this.url + '/users', data)
    }
    updateStats(id, data){
        return this.http.put(this.url + '/stats/' + id, data)
    }
    getAllStats(){
        return this.http.get(this.url + '/stats')
    }
    getStatsById(id: any){
        return this.http.get(this.url + "/stats/" + id)
    }
    getStatsByUsername(username: any){
        return this.http.get(this.url + "/stats/" + username)
    }

}