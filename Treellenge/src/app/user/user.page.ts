import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication-service'


@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  validation = false
  userData: any

  private data = [
    {
      id: '1',
      title: 'First challenge',
      imgURL: 'assets/img/reto1s.svg',
      description: 'Innovative ideas with bottles'
    },
    {
      id: '2',
      title: 'Second challenge',
      imgURL: 'assets/img/reto2s.svg',
      description: 'Grow a plant'
    },
    {
      id: '3',
      title: 'Third challenge',
      imgURL: 'assets/img/reto3s.svg',
      description: 'Plogging in your neighborhood'
    },
  ];

  constructor(public auth: AuthenticationService) { }

  ngOnInit() {

    if (this.auth.isLoggedIn) {
      this.validation = true;
      this.userData = JSON.parse(localStorage.getItem('user'));
      console.log(this.userData)
    }

   

  }

  public getData() {
    return this.data;
  } 

}
