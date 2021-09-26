import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {DuyuruPageRoutingModule} from './duyuru-routing.module';

import {DuyuruPage} from './duyuru.page';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DuyuruPageRoutingModule,
        HttpClientModule
    ],
    declarations: [DuyuruPage]
})
export class DuyuruPageModule {
}
