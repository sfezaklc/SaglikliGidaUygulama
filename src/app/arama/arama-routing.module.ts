import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AramaPage } from './arama.page';

const routes: Routes = [
  {
    path: '',
    component: AramaPage,
    children: [
      {
        path: 'sonuc/:tip/:id',
        loadChildren: () => import('../sonuc/sonuc.module').then( m => m.SonucPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AramaPageRoutingModule {}
