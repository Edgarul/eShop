import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      id: '1',
      image: 'assets/camisas/1.png',
      title: 'Playera clasica SPACE HIGH',
      category: 'Merch oficial',
      price: 15,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/camisas/2.png',
      title: 'Playera SPACE HIGH Astronaut Light',
      category: 'Merch oficial',
      price: 15,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/camisas/4.png',
      title: 'Playera SPACE HIGH Astronaut Full',
      category: 'Merch oficial',
      price: 15,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/camisas/3.png',
      title: 'Playera SPACE HIGH Trip',
      category: 'Merch oficial',
      price: 15,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/camisas/5.png',
      title: 'Stickers',
      category: 'Merch oficial',
      price: 15,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/camisas/6.png',
      title: 'Stickers',
      category: 'Merch oficial',
      price: 15,
      description: 'bla bla bla bla bla'
    },
    {
      id: '7',
      image: 'assets/camisas/7.png',
      title: 'Stickers',
      category: 'Merch oficial',
      price: 15,
      description: 'bla bla bla bla bla'
    },
    {
      id: '8',
      image: 'assets/imagenes/sticker_00x.png',
      title: 'Stickers',
      category: 'Merch oficial',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '9',
      image: 'assets/imagenes/sticker1.png',
      title: 'Stickers',
      category: 'Merch oficial',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '1',
      image: 'assets/imagenes/CHOPPERSAMURAI.png',
      title: 'Playera Chopper samurai',
      category: 'Anime',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/imagenes/ITACHI.png',
      title: 'Hoodie',
      category: 'Anime',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/imagenes/ITACHISUSANO.png',
      title: 'Mug',
      category: 'Anime',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/imagenes/NARUTOBIJUUDAMA.png',
      title: 'Pin',
      category: 'Anime',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/imagenes/NARUTOSABIOWAL.png',
      title: 'Stickers',
      category: 'Anime',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/imagenes/NARUTOXSASUKE.png',
      title: 'Stickers',
      category: 'Anime',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/imagenes/SHARINGANB&W.png',
      title: 'Stickers',
      category: 'Anime',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/imagenes/sticker_00x.png',
      title: 'Stickers',
      category: 'Anime',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/imagenes/sticker1.png',
      title: 'Stickers',
      category: 'Anime',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
  ];


  constructor() {

  }

  getAllProduct(){
    return this.products;
  }

  getProduct(id:string){
   return this.products.find(item => id === item.id);
  }
}
