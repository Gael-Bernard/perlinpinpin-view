import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms"
import { SharedModule } from '../shared/shared.module';
import { ColorablePerlinMapComponent } from './colorable-perlin-map/colorable-perlin-map.component';
import { SideviewPerlinMapComponent } from './sideview-perlin-map/sideview-perlin-map.component';



@NgModule({
  declarations: [
    ColorablePerlinMapComponent,
    SideviewPerlinMapComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class PerlinMapsModule { }
