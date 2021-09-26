import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BilgiPageRoutingModule } from './bilgi-routing.module';

import { BilgiPage } from './bilgi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BilgiPageRoutingModule
  ],
  declarations: [BilgiPage]
})
export class BilgiPageModule {}
