import { NgModule } from '@angular/core';
import { CanvasModule } from './canvas/canvas.module';


const IMPORTED_EXPORTED = [
  CanvasModule,
]


@NgModule({
  declarations: [
  ],
  imports: [
    ...IMPORTED_EXPORTED,
  ],
  exports: [
    ...IMPORTED_EXPORTED,
  ]
})
export class SharedModule { }
