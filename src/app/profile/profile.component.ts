import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: any[];
  repos: any[];
  username: string;

  constructor(private ProfileService: ProfileService) {
    this.ProfileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
    this.ProfileService.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })


  }

  findProfile() {
    this.ProfileService.updateProfile(this.username);
    this.ProfileService.getProfileInfo().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
    this.ProfileService.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })
  }

  ngOnInit() {



    

  }

}
