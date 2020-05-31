import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyChallengePageRoutingModule } from './daily-challenge-routing.module';

import { DailyChallengePage } from './daily-challenge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyChallengePageRoutingModule
  ],
  declarations: [DailyChallengePage]
})
export class DailyChallengePageModule {}
