import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarjsService {

  constructor() { }

  cargar(archivos: string){
      let scripts = document.createElement('script');
      scripts.src = './../../assets/js/' + archivos + '.js';
      let body =  document.getElementsByTagName('Body')[0];
      body.appendChild(scripts);
  }
}
