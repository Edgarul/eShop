import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DESTRUIRJSService {

  constructor() { }

  destruir(){
    console.log('Pasado')
      let scripts = document.getElementsByTagName('script');
      let body =  document.getElementsByTagName('Body')[0];
      body.removeChild(scripts[scripts.length - 1]);
  }
}
