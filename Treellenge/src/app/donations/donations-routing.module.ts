import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonationsPage } from './donations.page';

const routes: Routes = [
  {
    path: '',
    component: DonationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonationsPageRoutingModule {}
