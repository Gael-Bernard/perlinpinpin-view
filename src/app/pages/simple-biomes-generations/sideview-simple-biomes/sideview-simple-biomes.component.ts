import { Component, OnInit, ViewChild } from '@angular/core';
import CanvasManager2D from 'src/app/base-components/canvas/CanvasManager2D';
import { FullscreenCanvasComponent } from 'src/app/base-components/canvas/components/canvas/fullscreen-canvas.component';
import SquaresCanvasRender from 'src/app/canvas-renderers/square/SquaresCanvasRender';
import Vec2 from 'src/app/maths/geometry/Vec2';
import SimpleBiomes2DWorld from 'src/app/world-models/square-world/simple-biomes/SimpleBiomes2DWorld';

@Component({
  selector: 'app-sideview-simple-biomes',
  templateUrl: './sideview-simple-biomes.component.html',
  styleUrls: ['./sideview-simple-biomes.component.scss']
})
export class SideviewSimpleBiomesComponent implements OnInit {

  public canvas!: CanvasManager2D;
  readonly world = new SimpleBiomes2DWorld(43);
  readonly renderer = new SquaresCanvasRender(this.world, {negativeY: true});

  @ViewChild("canvas", {static: true})
  readonly canvasElem!: FullscreenCanvasComponent;

  ngOnInit(): void {
    this.canvas = new CanvasManager2D(this.canvasElem.getCanvasElement(), this.renderer);
    this.canvas.setScale(Vec2.SAME(16));
    this.canvas.render();
  }

}
