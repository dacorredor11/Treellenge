import { Component } from '@angular/core';
import { AuthenticationService } from '../shared/authentication-service'
import { User } from '../shared/user.model'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

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

  private data1 = [
    {
      id: '1',
      title: 'First tip',
      imgURL: 'assets/img/TIP1.svg',
    },
    {
      id: '2',
      title: 'Second tip',
      imgURL: 'assets/img/TIP2.svg',
    },
    {
      id: '3',
      title: 'Third tip',
      imgURL: 'assets/img/TIP3.svg',
    },
  ];

  constructor(public auth: AuthenticationService) { }
  
  ngOnInit() {

    if (this.auth.isLoggedIn) {
      this.validation = true
      this.userData = JSON.parse(localStorage.getItem('user'));
      console.log(this.userData)
    }

  }

  bringData() {
    this.userData = JSON.parse(localStorage.getItem('user'));;
    console.log(this.userData)
  }

  public getData() {
    return this.data;
  } 

  public getData1() {
    return this.data1;
  } 
}
