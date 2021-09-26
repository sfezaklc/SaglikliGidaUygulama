import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BilgiPage } from './bilgi.page';

const routes: Routes = [
  {
    path: '',
    component: BilgiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BilgiPageRoutingModule {}
