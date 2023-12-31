import Color from "src/app/base-components/color/Color";
import SideviewRender from "../SideviewRender";

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
