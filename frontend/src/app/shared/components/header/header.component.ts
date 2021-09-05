import { Component, OnInit } from '@angular/core';
import { CargarjsService } from 'src/app/core/service/cargarjs.service';
import { DESTRUIRJSService } from 'src/app/core/service/destruirjs.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   items = 14;

  constructor(private cargarjs: CargarjsService,
    private destroy : DESTRUIRJSService) {
    cargarjs.cargar('navbar');
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroy.destruir();
  }

  emptyCart(){
    if(this.items === 15){
      this.items = 0;
    }
    else{
      this.items = this.items + 1;
    }
  }
}
