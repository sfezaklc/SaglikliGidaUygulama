import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DuyuruPage } from './duyuru.page';

const routes: Routes = [
  {
    path: '',
    component: DuyuruPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DuyuruPageRoutingModule {}
