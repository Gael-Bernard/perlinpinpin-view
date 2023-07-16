import { Component, ViewChild } from '@angular/core';
import ColoredPerlinRender from 'src/app/shared/canvas/common-canvas-render/ColoredPerlinRender';
import { FullscreenCanvasComponent } from 'src/app/shared/canvas/components/canvas/fullscreen-canvas.component';
import CanvasManager2D from 'src/app/shared/canvas/manager/CanvasManager2D';
import Color from 'src/app/shared/canvas/manager/Color';
import Vec2 from 'src/app/shared/maths/geometry/Vec2';

@Component({
  selector: 'app-colorable-perlin-map',
  templateUrl: './colorable-perlin-map.component.html',
  styleUrls: ['./colorable-perlin-map.component.scss']
})
export class ColorablePerlinMapComponent {

  @ViewChild("canvas", {static: true})
  canvasComponent!: FullscreenCanvasComponent;

  canvas!: CanvasManager2D;
  renderer!: ColoredPerlinRender;


  ngOnInit(): void {
    this.initOnCanvasReady();
  }

  private initOnCanvasReady() {
    const canvasElem: HTMLCanvasElement = this.canvasComponent.getCanvasElement();

    this.renderer = new ColoredPerlinRender(64677, Color.BLUE, Color.GREEN, 0.7);
    this.canvas = new CanvasManager2D(canvasElem, this.renderer);
    this.canvas.setScaleWithoutRender(Vec2.SAME(64));
    this.canvas.setOffsetWithoutRender(new Vec2(0, 0));
    this.earth();
    this.canvas.render();
  }

  shadesOfGray(): void {
    this.renderer.color1 = Color.BLACK;
    this.renderer.color2 = Color.WHITE;
    this.renderer.threshold = undefined;
    this.canvas.render();
  }

  earth(): void {
    this.renderer.color1 = Color.BLUE;
    this.renderer.color2 = Color.GREEN;
    this.renderer.threshold = 0.6;
    this.canvas.render();
  }

  mars(): void {
    this.renderer.color1 = new Color(180, 75, 25, 1.0);
    this.renderer.color2 = new Color(155, 50, 25, 1.0);
    this.renderer.threshold = undefined;
    this.canvas.render();
  }

}
