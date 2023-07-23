import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideviewSimpleBiomesComponent } from './sideview-simple-biomes/sideview-simple-biomes.component';
import { CanvasModule } from 'src/app/base-components/canvas/canvas.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SideviewSimpleBiomesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CanvasModule,
  ]
})
export class SimpleBiomesGenerationsModule { }
