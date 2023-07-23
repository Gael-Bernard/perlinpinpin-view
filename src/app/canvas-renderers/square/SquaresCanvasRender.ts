import { CanvasWriter2D, LocalCanvasRenderer2D } from "src/app/base-components/canvas/CanvasManager2D";
import Rectangle from "src/app/maths/geometry/Rectangle";
import Vec2 from "src/app/maths/geometry/Vec2";
import SquareWorld from "src/app/world-models/square-world/SquareWorld";
import UnicolorBlock2D from "src/app/world-models/square-world/simple-biomes/UnicolorBlock2D";

export type SquaresCanvasRenderOptions = {
  negativeX?: boolean;
  negativeY?: boolean;
}

export default class SquaresCanvasRender<SQ extends UnicolorBlock2D> implements LocalCanvasRenderer2D {

  readonly DEFAULT_OPTIONS: SquaresCanvasRenderOptions = {
    negativeX: false,
    negativeY: false,
  }

  readonly options: SquaresCanvasRenderOptions;

  constructor(
    readonly world: SquareWorld<SQ>,
    options?: SquaresCanvasRenderOptions
  ) {
    this.options = Object.assign(this.DEFAULT_OPTIONS, options);
  }

  renderArea(canvas: CanvasWriter2D, area: Rectangle): Promise<void> {
    return new Promise<void>(() => {

      const topL = area.origin.map(Math.floor);
      const bottomR = area.origin.plus(area.expansion).map(Math.ceil);

      for(let x = topL.x; x < bottomR.x; x++) {
        for(let y = topL.y; y < bottomR.y; y++) {

          const localOrigin = new Vec2(x, y);
          const localOriginNeg = this.getNegPositionIfRequired(localOrigin, bottomR);
          const rect = new Rectangle(localOrigin, localOrigin.plus(Vec2.SAME(1.1)) );
          const block = this.world.getSquare(localOriginNeg);
          canvas.plainRectangle(rect, block.color.toCSS());

        }
      }

    });
  }

  private getNegPositionIfRequired(position: Vec2, frameBottomRight: Vec2): Vec2 {
    const x = this.options.negativeX ? frameBottomRight.x - position.x : position.x;
    const y = this.options.negativeY ? frameBottomRight.y - position.y : position.y;
    return new Vec2(x, y);
  }

}
