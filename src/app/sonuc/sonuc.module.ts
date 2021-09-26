import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SonucPageRoutingModule } from './sonuc-routing.module';

import { SonucPage } from './sonuc.page';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SonucPageRoutingModule,
    HttpClientModule
  ],
  declarations: [SonucPage]
})
export class SonucPageModule {}
