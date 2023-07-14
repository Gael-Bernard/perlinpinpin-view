import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridVectorsMapComponent } from './grid-vectors-map/grid-vectors-map.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    GridVectorsMapComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class PerlinMapsModule { }
