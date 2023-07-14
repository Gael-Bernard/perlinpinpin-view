import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import CanvasManager2D from 'src/app/shared/canvas/managers/CanvasManager';
import Rectangle from 'src/app/shared/maths/geometry/Rectangle';
import Vec2 from 'src/app/shared/maths/geometry/Vec2';

@Component({
  selector: 'app-grid-vectors-map',
  templateUrl: './grid-vectors-map.component.html',
  styleUrls: ['./grid-vectors-map.component.scss']
})
export class GridVectorsMapComponent implements OnInit {

  canvasEvent: BehaviorSubject<CanvasManager2D|undefined> =
      new BehaviorSubject(undefined) as BehaviorSubject<CanvasManager2D|undefined>;


  ngOnInit(): void {
    this.initOnCanvasReady();
  }

  private initOnCanvasReady() {
    this.canvasEvent.subscribe({
      next: (canvas) => {

        if(canvas === undefined)
          return;

        const rect = new Rectangle(new Vec2(16, 16), new Vec2(32, 32));
        canvas.drawPlainRectangle(rect, "green");

      },
    });
  }


}
