import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnasayfaPageRoutingModule } from './anasayfa-routing.module';

import { AnasayfaPage } from './anasayfa.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    AnasayfaPageRoutingModule
  ],
  declarations: [AnasayfaPage]
})
export class AnasayfaPageModule {}
