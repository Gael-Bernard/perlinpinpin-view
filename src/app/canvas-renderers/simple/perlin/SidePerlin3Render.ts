import SideviewRender from "../SideviewRender";
import Vec2 from "src/app/maths/geometry/Vec2";
import Color from "src/app/base-components/color/Color";
import MultilayerPerlin from "src/app/generation/noise-functions/perlin/MultilayerPerlin";
import PerlinLayer from "src/app/generation/noise-functions/perlin/PerlinLayer";

export default class SidePerlin3Render extends SideviewRender {

  readonly layers: PerlinLayer[] = [
    { amplitude: 60, stretch: new Vec2(60, 1), seed: 7 },
    { amplitude: 40, stretch: new Vec2(40, 1), seed: 31 },
    { amplitude: 4, stretch: new Vec2(8, 1), seed: 97 },
  ]

  readonly perlin = new MultilayerPerlin(this.layers);

  constructor(y: number, groundColor: Color, skyColor: Color) {
    super(y, groundColor, skyColor);
  }

  override heightAt(x: number): number {
    return this.perlin.at( new Vec2(x, this.y) );
  }

}
