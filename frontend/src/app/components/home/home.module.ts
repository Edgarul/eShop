import { NgModule } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home.component';
import {CommonModule} from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';

import { HomeRoutinesModule } from './home-routing.module';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutinesModule,
    CoreModule,
  ]
})
export class HomeModule { }
