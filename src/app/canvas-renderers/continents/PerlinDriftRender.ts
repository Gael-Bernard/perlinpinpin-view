import { CanvasWriter2D, LocalCanvasRenderer2D } from "src/app/base-components/canvas/CanvasManager2D";
import Rectangle from "src/app/maths/geometry/Rectangle";
import PerlinDriftingContinents from '../../world-models/drifting-continents/perlin-drifting-continents/PerlinDriftingContinents';
import Vec2 from "src/app/maths/geometry/Vec2";

export default class PerlinDriftRender implements LocalCanvasRenderer2D {

  readonly model = new PerlinDriftingContinents(16411689541, 16);

  renderArea(canvas: CanvasWriter2D, area: Rectangle): Promise<void> {
    return new Promise<void>( () => {

      const topL = area.origin.map(Math.floor);
      const bottomR = area.origin.plus(area.expansion).map(Math.ceil);

      for(let x = topL.x; x < bottomR.x; x += 1) {
        for(let y = topL.y; y < bottomR.y; y += 1) {

          const position = new Vec2(x, y);
          const rect = new Rectangle(position , Vec2.SAME(1.2) );
          canvas.plainRectangle(rect, this.model.at(position).toCSS() );

        }
      }

    });
  }

}
