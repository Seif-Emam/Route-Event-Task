import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
    {path: '', redirectTo: 'product', pathMatch:'full'},

    { path: 'product', component:ProductListComponent },
    { path: 'productsdetails/:id', component:ProductDetailComponent }, // Add route for product detail

    { path: 'home', component:HomeComponent },



    { path: '**', component: NotfoundComponent },

];
