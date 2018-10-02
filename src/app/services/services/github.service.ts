import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { GithubComponent } from '../component/github.component';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username = 'zecollokaris';
    // 
    private client_id = '203dd913322b3db7d987';
    // 
    private client_secret = '020c0b3665296b33d758edeeced30473ef44f7da';

    constructor(private _http:Http){
        console.log('Github Service Init... Welcome by ZECOLLOKARIS');
        this.username = 'zecollokaris'
    }

    getUser(){
        return this._http.get('https://api.github.com/users/'+this.username)
            .map(res => res.json());
    }

    getRepos() {
        return this._http.get('https://api.github.com/users/' + this.username + '/repos')
            .map(res => res.json());
    }

    updateUsername(username:string){
        this.username = username;
    }

}
