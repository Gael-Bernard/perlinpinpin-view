import Vec2 from "src/app/maths/geometry/Vec2";

export default interface NoiseFunction {
  at(position: Vec2): number;
}
