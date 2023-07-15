import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ColorablePerlinMapComponent } from './colorable-perlin-map/colorable-perlin-map.component';



@NgModule({
  declarations: [
    ColorablePerlinMapComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class PerlinMapsModule { }
