import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  validation = false
  slides = [
    {
      img: '../../assets/img/nature_on_screen.svg',
      title: 'Lets change the world<br>through our phone!'
    },
    {
      img: '../../assets/img/world_is_mine.svg',
      title: 'Share incredible echological<br>experiences with others'
    },
    {
      img: 'assets/img/nature_on_screen.svg',
      title: 'Lets change the world<br>through our phone'
    }
  ];

  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) { }

  ngOnInit() {

    if (this.authService.isLoggedIn) {
      this.validation = true
      this.router.navigate(['home']);
    }
  }

  /* logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then((res) => {
        if (this.authService.isEmailVerified) {
          this.router.navigate(['home']);
        } else {
          window.alert('Email is not verified')
          return false;
        }
      }).catch((error) => {
        window.alert(error.message)
      })
  } */

}