import Rectangle from "../../maths/geometry/Rectangle";
import Vec2 from "../../maths/geometry/Vec2";
import { CanvasWriter2D, LocalCanvasRenderer2D } from "../manager/CanvasManager2D";

export default class ChessboardRender implements LocalCanvasRenderer2D {

  constructor(
    readonly color1: string,
    readonly color2: string,
  ) {}

  async renderArea(canvas: CanvasWriter2D, area: Rectangle): Promise<void> {
    const topL: Vec2 = area.origin.map(Math.floor);
    const bottomR: Vec2 = area.origin.plus(area.expansion).map(Math.ceil);

    for(let x = topL.x; x < bottomR.x; x++) {
      for(let y = topL.y; y < bottomR.y; y++) {


        const pos = new Vec2(x, y);
        const color = (x + y) % 2 == 0 ? this.color1 : this.color2;

        canvas.drawPixel(pos, color);

      }
    }
  }

}
