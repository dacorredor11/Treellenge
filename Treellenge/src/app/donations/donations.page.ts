import { Component, OnInit } from '@angular/core';
import { DonationsService } from './donations.service';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.page.html',
  styleUrls: ['./donations.page.scss'],
})
export class DonationsPage implements OnInit {

  data = [];

  constructor(private donationsService: DonationsService ) { }

  ngOnInit() {
    this.data = this.donationsService.getData();
  }
}
