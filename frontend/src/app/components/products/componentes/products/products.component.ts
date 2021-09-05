import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [
    {
      id: '1',
      image: 'assets/camisas/1.png',
      title: 'Playera clasica SPACE HIGH',
      price: 15,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/camisas/2.png',
      title: 'Playera SPACE HIGH Astronaut Light',
      price: 15,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/camisas/4.png',
      title: 'Playera SPACE HIGH Astronaut Full',
      price: 15,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/camisas/3.png',
      title: 'Playera SPACE HIGH Trip',
      price: 15,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/camisas/5.png',
      title: 'Stickers',
      price: 15,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/camisas/6.png',
      title: 'Stickers',
      price: 15,
      description: 'bla bla bla bla bla'
    },
    {
      id: '7',
      image: 'assets/camisas/7.png',
      title: 'Stickers',
      price: 15,
      description: 'bla bla bla bla bla'
    },
    {
      id: '8',
      image: 'assets/imagenes/sticker_00x.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '9',
      image: 'assets/imagenes/sticker1.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
  ];

  constructor() { }

  ngOnInit(): void {

  }

  clickProduct(id: number) {
    console.log(id);
  }

}
