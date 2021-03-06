import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent{


  @Input()
  product!: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  addcar(){
    console.log("Añadir al carrito");
    this.productClicked.emit(this.product.id);
  }

}
