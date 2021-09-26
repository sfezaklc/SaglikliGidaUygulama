import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ListelerPageRoutingModule} from './listeler-routing.module';

import {ListelerPage} from './listeler.page';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ListelerPageRoutingModule,
        HttpClientModule
    ],
    declarations: [ListelerPage]
})
export class ListelerPageModule {
}
