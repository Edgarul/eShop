import { Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { ProductsService } from  './../../../../core/service/products.service'
import {Product} from 'src/app/models/product.model'
import { CargarjsService } from 'src/app/core/service/cargarjs.service';
import { DESTRUIRJSService } from 'src/app/core/service/destruirjs.service'

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit, OnDestroy {

  product!: Product;

  constructor(private route: ActivatedRoute,
    private productsservice: ProductsService,
    private cargar: CargarjsService,
    private destroy: DESTRUIRJSService
    ) {
      cargar.cargar('detalle');
      console.log('cargado')
    }

  ngOnDestroy(): void {
    this.destroy.destruir();
  }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      const id = params.id;
      this.product = this.productsservice.getProduct(id);
      console.log(this.product);
    })
  }


}
