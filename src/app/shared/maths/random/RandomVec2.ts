import Vec2 from "../geometry/Vec2";
import NumberHash from "../hash/NumberHash";

export default class RandomVec2 {

  /**
   * Creates a Vec2 of norm 1.0 using Math.random()
   * @returns random vector
   */
  public static unitJs(): Vec2 {
    let v: Vec2;

    do {
      const x = Math.random() - 0.5;
      const y = Math.random() - 0.5;
      v = new Vec2(x, y);
    }
    while(v.isNullVector());

    return v.normalize();
  }

  public static mapSeededSimpleHash(v: Vec2, seed: number): Vec2 {
    const x = NumberHash.seededSimple(v.x, seed);
    const y = NumberHash.seededSimple(v.y, seed + 17);
    const result = new Vec2(x, y);
    return result.isNullVector() ? Vec2.SAME(1).normalize() : result.normalize();
  }

  public static mapSeededCosineSineSimpleHash(v: Vec2, seed: number): Vec2 {
    const angle = NumberHash.simple(
      NumberHash.seededSimple(v.x * 73 + 41, seed) * NumberHash.seededSimple(v.y * 11 + 17, seed + 17)
    );
    return new Vec2( Math.cos(angle), Math.sin(angle) );
  }

}
