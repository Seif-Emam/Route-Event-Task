import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full' },

  {
    path: 'product',
    loadComponent: () =>
      import('./features/pages/product-list/product-list.component').then(m => m.ProductListComponent)
  },
  {
    path: 'productsdetails/:id',
    loadComponent: () =>
      import('./features/pages/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./shared/notfound/notfound.component').then(m => m.NotfoundComponent)
  }
];