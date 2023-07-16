import Rectangle from "../../maths/geometry/Rectangle";
import Vec2 from "../../maths/geometry/Vec2";
import TempPerlin from "../../maths/perlin/TempPerlin";
import { CanvasWriter2D, LocalCanvasRenderer2D } from "../manager/CanvasManager2D";
import Color from "../manager/Color";
import SideviewRender from "./SideviewRender";

export default class SidePerlinRender extends SideviewRender {

  readonly perlin = new TempPerlin(61);

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
