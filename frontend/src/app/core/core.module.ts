import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './service/products.service';
import { CargarjsService } from './service/cargarjs.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    ProductsService,
    CargarjsService
  ]
})
export class CoreModule { }
