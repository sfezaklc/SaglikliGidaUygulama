import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {HaberPageRoutingModule} from './haber-routing.module';

import {HaberPage} from './haber.page';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HaberPageRoutingModule,
        HttpClientModule
    ],
    declarations: [HaberPage]
})
export class HaberPageModule {
}
