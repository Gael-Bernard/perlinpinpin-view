import { CanvasWriter2D, LocalCanvasRenderer2D } from "src/app/shared/canvas/manager/CanvasManager2D";
import Rectangle from "src/app/shared/maths/geometry/Rectangle";
import Vec2 from "src/app/shared/maths/geometry/Vec2";
import TempPerlin from "src/app/shared/maths/perlin/TempPerlin";

export default class TempPerlinRender implements LocalCanvasRenderer2D {

  readonly perlin = new TempPerlin(9748989);

  renderArea(canvas: CanvasWriter2D, area: Rectangle): void {
    const topleft: Vec2 = area.origin.map(Math.floor);
    const bottomRight: Vec2 = topleft.plus(area.expansion.map(Math.ceil));

    for(let x=topleft.x; x < bottomRight.x; x += 0.1) {
      for(let y=topleft.y; y < bottomRight.y; y += 0.1) {

        const pos = new Vec2(x,y);
        const value = (this.perlin.at(pos) + 1) / 2 * 255;

        const color: string = value < 80.0 ? `rgb(${value/2}, ${128 + value/2}, ${value/2})` : `rgb(${128 - value}, ${128 - value}, ${255 - value/2})`;
        console.log(color)


        canvas.plainRectangle(new Rectangle(pos, new Vec2(0.1, 0.1)), color);

      }
    }

  }

}
