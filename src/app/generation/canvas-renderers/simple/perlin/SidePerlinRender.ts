import Perlin from "src/app/generation/noise-functions/perlin/Perlin";
import SideviewRender from "../SideviewRender";
import Color from "src/app/canvas/manager/Color";
import Vec2 from "src/app/maths/geometry/Vec2";

export default class SidePerlinRender extends SideviewRender {

  readonly perlin = new Perlin(61);

  constructor(
    y: number,
    groundColor: Color,
    skyColor: Color,
  ) {
    super(y, groundColor, skyColor);
  }

  override heightAt(x: number): number {
    return (this.perlin.at(new Vec2(x / this.xStretch, this.y)) + 1) / 2;
  }

}
