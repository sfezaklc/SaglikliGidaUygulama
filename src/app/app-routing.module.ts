import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'arama',
    loadChildren: () => import('./arama/arama.module').then( m => m.AramaPageModule)
  },
  {
    path: 'listeler',
    loadChildren: () => import('./listeler/listeler/listeler.module').then(m => m.ListelerPageModule)
  },
  {
    path: 'duyurular',
    loadChildren: () => import('./duyurular/duyurular.module').then( m => m.DuyurularPageModule)
  },
  {
    path: 'bilgi',
    loadChildren: () => import('./bilgi/bilgi.module').then( m => m.BilgiPageModule)
  },
  {
    path: 'sonuc/:tip/:id',
    loadChildren: () => import('./sonuc/sonuc.module').then( m => m.SonucPageModule)
  },
  {
    path: 'liste/:id',
    loadChildren: () => import('./listeler/liste/liste.module').then(m => m.ListePageModule)
  },
  {
    path: 'kategori/:id',
    loadChildren: () => import('./listeler/kategori/kategori.module').then(m => m.KategoriPageModule)
  },
  {
    path: 'anasayfa',
    loadChildren: () => import('./anasayfa/anasayfa.module').then( m => m.AnasayfaPageModule)
  },
  {
    path: 'haberler',
    loadChildren: () => import('./haberler/haberler.module').then( m => m.HaberlerPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
