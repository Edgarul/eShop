import { Component, OnInit } from '@angular/core';
import { CargarjsService } from 'src/app/core/service/cargarjs.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private cargarjs: CargarjsService) {
    cargarjs.cargar('404');
   }

  ngOnInit(): void {
  }

}
