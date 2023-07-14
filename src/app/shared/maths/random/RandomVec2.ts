import Vec2 from "../geometry/Vec2";
import NumberHash from "../hash/NumberHash";

export default class RandomVec2 {

  /**
   * Creates a Vec2 of norm 1.0 using Math.random()
   * @returns random vector
   */
  public static unitJs(): Vec2 {
    const x = Math.random() - 0.5;
    const y = Math.random() - 0.5;
    return new Vec2(x, y).normalize();
  }

  public static mapSeededSimpleHash(v: Vec2, seed: number): Vec2 {
    const x = NumberHash.seededSimple(v.x, seed);
    const y = NumberHash.seededSimple(v.y, seed);
    return new Vec2(x, y).normalize();
  }

}
