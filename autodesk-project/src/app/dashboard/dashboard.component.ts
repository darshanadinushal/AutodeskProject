import { Component, OnInit } from '@angular/core';
import { User, UserProfile } from 'src/app/model/model';
import { Router } from '@angular/router';


@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
  })
  export class DashboardComponent implements OnInit  {

    userProfile: UserProfile;

    constructor(private router: Router) {

    }

  ngOnInit(): void {
    this.getUserProfileValues();
  }

  getUserProfileValues() {

      if (localStorage.getItem('userProfile')) {
        this.userProfile = JSON.parse(localStorage.getItem('userProfile'));
      } else {
        this.router.navigate(['signup-form']);
      }
  }


  signOutClick(){
    localStorage.removeItem('userProfile');
    this.router.navigate(['']);
  }


}
