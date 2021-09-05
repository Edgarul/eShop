import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { ContactComponent } from './components/contact/components/contact.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {path: '', component: LayoutComponent,
    children:[
    {path: '', redirectTo:'home', pathMatch: 'full'},
    {path: 'home',
      loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
    },
    {
      path: 'products',
      loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule)
    },
    {
      path: 'contact',
      loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule)
    },
    {path: 'cart', component: CartComponent},
  ]},

  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: '**', component: PageNotFoundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
