import { Component, OnInit, ViewChild } from '@angular/core';
import CanvasManager2D from 'src/app/base-components/canvas/CanvasManager2D';
import { FullscreenCanvasComponent } from 'src/app/base-components/canvas/components/canvas/fullscreen-canvas.component';
import PerlinDriftRender from 'src/app/canvas-renderers/continents/PerlinDriftRender';
import Vec2 from 'src/app/maths/geometry/Vec2';

@Component({
  selector: 'app-perlin-continents-map',
  templateUrl: './perlin-continents-map.component.html',
  styleUrls: ['./perlin-continents-map.component.scss']
})
export class PerlinContinentsMapComponent implements OnInit {

  readonly renderer = new PerlinDriftRender();

  canvas!: CanvasManager2D;

  @ViewChild("canvas", {static: true})
  canvasElem!: FullscreenCanvasComponent;

  ngOnInit(): void {
    const canvasEl = this.canvasElem.getCanvasElement();
    this.canvas = new CanvasManager2D(canvasEl, this.renderer);

    this.canvas.setScale(Vec2.SAME(2));
  }

}
