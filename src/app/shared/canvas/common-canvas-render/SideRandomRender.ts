import Rectangle from "../../maths/geometry/Rectangle";
import Vec2 from "../../maths/geometry/Vec2";
import { CanvasWriter2D, LocalCanvasRenderer2D } from "../manager/CanvasManager2D";
import Color from "../manager/Color";

export default class SideRandomRender implements LocalCanvasRenderer2D {

  public heightRatio = 0.5;
  public amplitudeRatio = 0.1;
  public xStretch = 1.0;

  constructor(
    public y: number,
    public groundColor: Color,
    public skyColor: Color,
  ) { }

  async renderArea(canvas: CanvasWriter2D, area: Rectangle): Promise<void> {

    const topL: Vec2 = area.origin.map(Math.floor);
    const bottomR: Vec2 = area.origin.plus( area.expansion ).map(Math.ceil);

    canvas.plainBackground(this.skyColor.toCSS());

    for(let x=topL.x; x < bottomR.x; x += 0.1) {
      const randomVal = Math.random();
      const value = randomVal * area.expansion.y * this.amplitudeRatio;
      const yBaseline = bottomR.y - (area.expansion.y * this.heightRatio);
      const rect = new Rectangle( new Vec2(x, yBaseline - value ), new Vec2(0.12, bottomR.y) );
      canvas.plainRectangle(rect, this.groundColor.toCSS());
    }

  }

}
