import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckMyTreePageRoutingModule } from './check-my-tree-routing.module';

import { CheckMyTreePage } from './check-my-tree.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckMyTreePageRoutingModule
  ],
  declarations: [CheckMyTreePage]
})
export class CheckMyTreePageModule {}
