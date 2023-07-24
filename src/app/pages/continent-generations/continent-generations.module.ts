import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CanvasModule } from 'src/app/base-components/canvas/canvas.module';
import { PerlinContinentsMapComponent } from './perlin-continents-map/perlin-continents-map.component';



@NgModule({
  declarations: [
    PerlinContinentsMapComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CanvasModule,
  ]
})
export class ContinentGenerationsModule { }
