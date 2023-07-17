import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms"
import { ColorablePerlinMapComponent } from './colorable-perlin-map/colorable-perlin-map.component';
import { SideviewPerlinMapComponent } from './sideview-perlin-map/sideview-perlin-map.component';
import { SideviewRandomMapComponent } from './sideview-random-map/sideview-random-map.component';
import { CanvasModule } from 'src/app/base-components/canvas/canvas.module';



@NgModule({
  declarations: [
    ColorablePerlinMapComponent,
    SideviewPerlinMapComponent,
    SideviewRandomMapComponent,
  ],
  imports: [
    CommonModule,
    CanvasModule,
    ReactiveFormsModule,
  ]
})
export class SimpleGenerationsModule { }
