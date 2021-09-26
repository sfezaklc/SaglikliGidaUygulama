import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListelerPage } from './listeler.page';

const routes: Routes = [
  {
    path: '',
    component: ListelerPage
  },
  {
    path: 'liste/:id',
    loadChildren: () => import('../liste/liste.module').then(m => m.ListePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListelerPageRoutingModule {}
