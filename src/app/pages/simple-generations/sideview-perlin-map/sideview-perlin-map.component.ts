import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FullscreenCanvasComponent } from 'src/app/base-components/canvas/components/canvas/fullscreen-canvas.component';
import CanvasManager2D from 'src/app/base-components/canvas/CanvasManager2D';
import Color from 'src/app/base-components/color/Color';
import Vec2 from 'src/app/maths/geometry/Vec2';
import SidePerlinRender from 'src/app/canvas-renderers/simple/perlin/SidePerlinRender';

@Component({
  selector: 'app-sideview-perlin-map',
  templateUrl: './sideview-perlin-map.component.html',
  styleUrls: ['./sideview-perlin-map.component.scss']
})
export class SideviewPerlinMapComponent implements OnInit {

  readonly renderer = new SidePerlinRender(0.4, Color.BROWN, Color.SKYBLUE);
  canvas!: CanvasManager2D;

  @ViewChild("canvas", {static: true})
  readonly canvasComponent!: FullscreenCanvasComponent;

  heightRatio = new FormControl<number>(0.5);
  amplitudeRatio = new FormControl<number>(0.1);
  xStretch = new FormControl<number>(0);
  xOffset = new FormControl<number>(0);


  ngOnInit(): void {
    const canvasElem = this.canvasComponent.getCanvasElement();
    this.canvas = new CanvasManager2D(canvasElem, this.renderer);
    this.canvas.setScaleWithoutRender(Vec2.SAME(32));

    this.render();
  }

  get height100(): number {
    return Math.floor( this.heightRatio.getRawValue() as number * 100 );
  }

  get amplitude100(): number {
    return Math.floor( this.amplitudeRatio.getRawValue() as number * 100 );
  }

  get xStretchValue(): number {
    let value = Math.exp( this.xStretch.getRawValue() as number );
    return Math.floor( value * 1000 ) / 1000;
  }

  get xOffsetValue(): number {
    let value = this.xOffset.getRawValue() as number;
    return Math.floor( value * 1000 ) / 1000;
  }

  render(): void {
    this.renderer.heightRatio = this.heightRatio.getRawValue() as number;
    this.renderer.amplitudeRatio = this.amplitudeRatio.getRawValue() as number;
    this.renderer.xStretch = this.xStretchValue as number;
    this.canvas.setOffset(new Vec2(this.xOffsetValue, 0));
    this.canvas.render();
  }

}
