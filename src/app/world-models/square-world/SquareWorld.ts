import Vec2 from 'src/app/maths/geometry/Vec2';
import LocatedSquare from './LocatedSquare';
import SquareLocatedSupplier from './SquareLocatedSupplier';

export default abstract class SquareWorld<SQ extends LocatedSquare> {

  readonly generator: SquareLocatedSupplier<SQ>;

  constructor(generator: SquareLocatedSupplier<SQ>) {
    this.generator = generator;
  }

  abstract getSquare(position: Vec2): SQ;

}
