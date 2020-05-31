import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyChallengePage } from './daily-challenge.page';

const routes: Routes = [
  {
    path: '',
    component: DailyChallengePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyChallengePageRoutingModule {}
