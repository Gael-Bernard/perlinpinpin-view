import Rectangle from "../../maths/geometry/Rectangle";
import Vec2 from "../../maths/geometry/Vec2";
import { CanvasWriter2D } from "../manager/CanvasManager2D";
import Color from "../manager/Color";
import SideviewRender from "./SideviewRender";

export default class SideRandomRender extends SideviewRender {

  constructor(
    y: number,
    groundColor: Color,
    skyColor: Color,
  ) {
    super(y, groundColor, skyColor);
  }

  override heightAt(x: number): number {
    return Math.random();
  }

}
