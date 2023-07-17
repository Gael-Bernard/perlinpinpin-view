import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullscreenCanvasComponent } from './components/canvas/fullscreen-canvas.component';



@NgModule({
  declarations: [
    FullscreenCanvasComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FullscreenCanvasComponent,
  ]
})
export class CanvasModule { }
