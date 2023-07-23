import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideviewSimpleBiomesComponent } from './sideview-simple-biomes/sideview-simple-biomes.component';
import { CanvasModule } from 'src/app/base-components/canvas/canvas.module';



@NgModule({
  declarations: [
    SideviewSimpleBiomesComponent,
  ],
  imports: [
    CommonModule,
    CanvasModule,
  ]
})
export class SimpleBiomesGenerationsModule { }
