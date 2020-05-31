import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckMyTreePage } from './check-my-tree.page';

const routes: Routes = [
  {
    path: '',
    component: CheckMyTreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckMyTreePageRoutingModule {}
