import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SonucPage } from './sonuc.page';

const routes: Routes = [
  {
    path: '',
    component: SonucPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SonucPageRoutingModule {}
