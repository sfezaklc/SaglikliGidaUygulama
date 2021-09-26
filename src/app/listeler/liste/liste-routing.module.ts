import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListePage } from './liste.page';

const routes: Routes = [
  {
    path: '',
    component: ListePage
  },
  {
    path: 'kategori/:id',
    loadChildren: () => import('../kategori/kategori.module').then(m => m.KategoriPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListePageRoutingModule {}
