import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistationRoutingModule } from './registation-routing.module';
import { RegistationComponent } from './registation.component';


@NgModule({
  declarations: [
    RegistationComponent
  ],
  imports: [
    CommonModule,
    RegistationRoutingModule
  ]
})
export class RegistationModule { }
