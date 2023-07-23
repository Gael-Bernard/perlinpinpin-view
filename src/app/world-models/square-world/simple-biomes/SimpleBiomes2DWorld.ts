import Vec2 from "src/app/maths/geometry/Vec2";
import SquareWorld from "../SquareWorld";
import SimpleBiome2DBlock from "./UnicolorBlock2D";
import SimpleBiome2DGenerator from "./SimpleBiomes2DGenerator";

export default class SimpleBiomes2DWorld extends SquareWorld<SimpleBiome2DBlock> {

  constructor(
    readonly seed: number,
  ) {
    super( new SimpleBiome2DGenerator(seed) );
  }

  override getSquare(position: Vec2): SimpleBiome2DBlock {
    return this.generator.get(position);
  }


}
