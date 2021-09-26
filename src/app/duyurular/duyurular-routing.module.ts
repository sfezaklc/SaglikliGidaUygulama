import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DuyurularPage } from './duyurular.page';

const routes: Routes = [
  {
    path: '',
    component: DuyurularPage
  },
  {
    path: 'duyuru',
    loadChildren: () => import('./duyuru/duyuru.module').then( m => m.DuyuruPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DuyurularPageRoutingModule {}
