import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../components/material/material.module';
import {CoreModule} from './../core/core.module'


@NgModule({
  declarations: [
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    HighlightDirective,

  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    CoreModule,
  ],
  exports: [
    ProductComponent,
    HeaderComponent,
    FooterComponent,
    HighlightDirective,
  ]
})
export class SharedModule { }
