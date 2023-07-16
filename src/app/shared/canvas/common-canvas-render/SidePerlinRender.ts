import Vec2 from "../../maths/geometry/Vec2";
import Perlin from "../../maths/perlin/Perlin";
import Color from "../manager/Color";
import SideviewRender from "./SideviewRender";

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
