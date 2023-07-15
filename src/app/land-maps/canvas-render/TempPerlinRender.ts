import { CanvasWriter2D, LocalCanvasRenderer2D } from "src/app/shared/canvas/managers/CanvasManager2D";
import Rectangle from "src/app/shared/maths/geometry/Rectangle";
import Vec2 from "src/app/shared/maths/geometry/Vec2";
import TempPerlin from "src/app/shared/maths/perlin/TempPerlin";

export default class TempPerlinRender implements LocalCanvasRenderer2D {

  readonly perlin = new TempPerlin(9748989);

  renderArea(canvas: CanvasWriter2D, area: Rectangle): void {
    const topleft: Vec2 = area.origin;
    const bottomRight: Vec2 = topleft.plus(area.expansion.map(Math.ceil));

    /*
    for(let x=topleft.x; x < bottomRight.x; x++) {
      for(let y=topleft.y; y < bottomRight.y; y++) {

        console.log("Area", area, x, y);

        const pos = new Vec2(x,y);
        const value = (this.perlin.at(pos) + 1) / 2 * 255;
        const color: string = `rgb(${value}, ${value}, ${value})`;
        canvas.drawPixel(pos, color);

      }
    }
    */
  }

}
