import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AramaPageRoutingModule } from './arama-routing.module';
import { AramaPage } from './arama.page';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AramaPageRoutingModule,
    HttpClientModule
  ],
  declarations: [AramaPage]
})
export class AramaPageModule {}
