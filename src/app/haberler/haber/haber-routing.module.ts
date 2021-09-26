import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HaberPage } from './haber.page';

const routes: Routes = [
  {
    path: '',
    component: HaberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HaberPageRoutingModule {}
