
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';

import { ContactComponent } from './components/contact.component';
import { SucursalesComponent } from './components/sucursales/sucursales.component';
import { ContactRoutingModule } from './sucursales-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ContactComponent,
    SucursalesComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    MaterialModule,
  ]
})
export class ContactModule { }
