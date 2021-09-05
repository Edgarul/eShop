import { Component, OnInit } from '@angular/core';
import { CargarjsService } from 'src/app/core/service/cargarjs.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  imagenes: string[] =
    [
      'assets/banners/1.png',
      'assets/banners/2.png',
      'assets/banners/3.png',
    ];

  constructor(private cargarjs: CargarjsService) {
    cargarjs.cargar('swipe');
  }

  ngOnInit(): void {
  }

}
