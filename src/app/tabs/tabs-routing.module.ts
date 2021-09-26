import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'arama',
        loadChildren: () => import('../arama/arama.module').then(m => m.AramaPageModule)
      },
      {
        path: 'listeler',
        loadChildren: () => import('../listeler/listeler/listeler.module').then(m => m.ListelerPageModule)
      },
      {
        path: 'anasayfa',
        children: [
          {
            path: '',
            loadChildren: () => import('../anasayfa/anasayfa.module').then(m => m.AnasayfaPageModule)
          },
          {
            path: 'duyurular',
            loadChildren: () => import('../duyurular/duyurular.module').then(m => m.DuyurularPageModule)
          },
          {
            path: 'haberler',
            loadChildren: () => import('../haberler/haberler.module').then(m => m.HaberlerPageModule)
          },
        ]
      },
      {
        path: 'bilgi',
        loadChildren: () => import('../bilgi/bilgi.module').then(m => m.BilgiPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/anasayfa',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/anasayfa',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
