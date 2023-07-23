import Vec2 from "src/app/maths/geometry/Vec2";
import LocatedSquare from './LocatedSquare';

export default interface SquareLocatedSupplier<SQ extends LocatedSquare> {

  get(position: Vec2): SQ;

}
