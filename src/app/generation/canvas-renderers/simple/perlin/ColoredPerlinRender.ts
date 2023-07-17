import { CanvasWriter2D, LocalCanvasRenderer2D } from "src/app/base-components/canvas/CanvasManager2D";
import Color from "src/app/base-components/color/Color";
import Perlin from "src/app/generation/noise-functions/perlin/Perlin";
import Rectangle from "src/app/maths/geometry/Rectangle";
import Vec2 from "src/app/maths/geometry/Vec2";

export default class ColoredPerlinRender implements LocalCanvasRenderer2D {

  readonly perlin: Perlin;

  constructor(
    readonly seed: number,
    public color1: Color,
    public color2: Color,
    public threshold?: number,
  ) {
    this.perlin = new Perlin(this.seed);
  }

  async renderArea(canvas: CanvasWriter2D, area: Rectangle): Promise<void> {
    return new Promise<void>(resolve => {

      const topleft: Vec2 = area.origin.map(Math.floor);
      const bottomRight: Vec2 = topleft.plus(area.expansion.map(Math.ceil));

      for(let x=topleft.x; x < bottomRight.x; x += 0.1) {
        for(let y=topleft.y; y < bottomRight.y; y += 0.1) {

          const pos = new Vec2(x,y);
          const value = (this.perlin.at(pos) + 1) / 2;
          const color: Color = this.threshold === undefined ? this.valueToColorGradient(value) : this.valueToColorWithThreshold(value);

          canvas.plainRectangle(new Rectangle(pos, new Vec2(0.11, 0.11)), color.toCSS());
          resolve();

        }
      }

    });

  }

  valueToColorWithThreshold(val: number): Color {
    if(val < this.threshold!) {
      const t = (val * 0.5 / this.threshold!) + 0.5;
      return Color.BLACK.linearInterpolate(this.color1, t);
    }
    else {
      const t = 1.0 - ((val - this.threshold!) * 0.5 / (1.0 - this.threshold!) + 0.5);
      return this.color2.linearInterpolate(Color.WHITE, t);
    }
  }

  valueToColorGradient(val: number): Color {
    return this.color1.linearInterpolate(this.color2, val);
  }

}
