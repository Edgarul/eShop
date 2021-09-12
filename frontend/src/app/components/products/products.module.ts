import { NgModule } from '@angular/core';
import {ProductsComponent} from './componentes/products/products.component';
import {ProductdetailsComponent} from './componentes/productdetails/productdetails.component';
import {CommonModule} from '@angular/common';

import { ProductsRoutingModule} from './products-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductdetailsComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
