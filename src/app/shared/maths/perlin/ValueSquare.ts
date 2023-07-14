import Vec2 from "../geometry/Vec2";

type ValueSquare<T> = {
  topLeft: T,
  topRight: T,
  bottomLeft: T,
  bottomRight: T,
}

export default ValueSquare;

export type Vec2Square = ValueSquare<Vec2>;
export type NumberSquare = ValueSquare<number>;

export type Vec2Function = (v:Vec2) => (Vec2);
export type Vec2BiFunction = (v1:Vec2, v2:Vec2) => (Vec2);

export function mapVec2SquareByField(v: Vec2Square, f: Vec2Function): Vec2Square {
  return {
    topLeft: f(v.topLeft),
    topRight: f(v.topRight),
    bottomLeft: f(v.bottomLeft),
    bottomRight: f(v.bottomRight),
  }
}

export function combineVec2SquareByField(v1: Vec2Square, v2: Vec2Square, f: Vec2BiFunction): Vec2Square {
  return {
    topLeft: f(v1.topLeft, v2.topLeft),
    topRight: f(v1.topRight, v2.topRight),
    bottomLeft: f(v1.bottomLeft, v2.bottomLeft),
    bottomRight: f(v1.bottomRight, v2.bottomRight),
  }
}

export function dotProductByField(v1: Vec2Square, v2: Vec2Square): NumberSquare {
  return {
    topLeft: v1.topLeft.dotProduct(v2.topLeft),
    topRight: v1.topRight.dotProduct(v2.topRight),
    bottomLeft: v1.bottomLeft.dotProduct(v2.bottomLeft),
    bottomRight: v1.bottomRight.dotProduct(v2.bottomRight),
  }
}
