import { Component, OnInit, ViewChild } from '@angular/core';
import TempPerlinRender from 'src/app/land-maps/canvas-render/TempPerlinRender';
import { FullscreenCanvasComponent } from 'src/app/shared/canvas/components/canvas/fullscreen-canvas.component';
import CanvasManager2D from 'src/app/shared/canvas/managers/CanvasManager2D';
import Vec2 from 'src/app/shared/maths/geometry/Vec2';

@Component({
  selector: 'app-grid-vectors-map',
  templateUrl: './grid-vectors-map.component.html',
  styleUrls: ['./grid-vectors-map.component.scss']
})
export class GridVectorsMapComponent implements OnInit {

  @ViewChild("canvas", {static: true})
  canvasComponent!: FullscreenCanvasComponent;

  canvas!: CanvasManager2D;


  ngOnInit(): void {
    this.initOnCanvasReady();
  }

  private initOnCanvasReady() {
    const canvasElem: HTMLCanvasElement = this.canvasComponent.getCanvasElement();

    this.canvas = new CanvasManager2D(canvasElem, new TempPerlinRender());
    this.canvas.setScaleWithoutRender(Vec2.SAME(128));
    this.canvas.render();
  }

}
