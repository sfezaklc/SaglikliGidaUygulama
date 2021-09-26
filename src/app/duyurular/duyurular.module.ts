import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {DuyurularPageRoutingModule} from './duyurular-routing.module';

import {DuyurularPage} from './duyurular.page';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DuyurularPageRoutingModule,
        HttpClientModule
    ],
    declarations: [DuyurularPage]
})
export class DuyurularPageModule {
}
