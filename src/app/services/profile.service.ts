import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class ProfileService {

  private username: string;
  private clientid = '203dd913322b3db7d987'
  private clientsecret = '020c0b3665296b33d758edeeced30473ef44f7da'


  constructor(private http: Http) {
    console.log("service is now ready");
    this.username = 'zecollokaris'
  }

  getProfileInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
      .map(res => res.json());

  }

  getProfileRepos() {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
      .map(res => res.json());
  }

  updateProfile(username: string) {
    this.username = username;
  }
}
