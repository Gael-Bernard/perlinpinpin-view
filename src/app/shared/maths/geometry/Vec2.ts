export default class Vec2 {

  constructor(
    readonly x: number,
    readonly y: number,
  ) { }

  norm(): number {
    return Math.sqrt( (this.x * this.x) + (this.y * this.y) );
  }

  /**
   * An alias for norm()
   */
  length(): number {
    return this.norm();
  }

  normalize(): Vec2 {
    let norm = this.norm();
    return new Vec2(this.x / norm, this.y / norm);
  }

  plus(v: Vec2): Vec2 {
    return new Vec2(this.x + v.x, this.y + v.y);
  }

  minus(v: Vec2): Vec2 {
    return new Vec2(this.x - v.x, this.y - v.y);
  }

  minusFrom(v: Vec2): Vec2 {
    return new Vec2(v.x - this.x, v.y - this.y);
  }

  stretch(value: number): Vec2 {
    return new Vec2(this.x * value, this.y * value);
  }

  innerProduct(v: Vec2): number {
    return (this.x * v.x) + (this.y * v.y);
  }

  /**
   * An alias for innerProduct(v)
   */
  dotProduct(v: Vec2): number {
    return this.innerProduct(v);
  }


}
