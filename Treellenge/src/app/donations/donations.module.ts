import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonationsPageRoutingModule } from './donations-routing.module';

import { DonationsPage } from './donations.page';
import { FooterComponent } from '../component/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonationsPageRoutingModule
  ],
  declarations: [DonationsPage, FooterComponent]
})
export class DonationsPageModule {}
