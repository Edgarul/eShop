import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { DESTRUIRJSService } from 'src/app/core/service/destruirjs.service';
import Swiper from 'swiper'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  mySwiper: Swiper;

  constructor( private destroy: DESTRUIRJSService  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.mySwiper = new Swiper('.swiper-container');
  }

  ngOnDestroy(): void {
    this.destroy.destruir();
  }

}
