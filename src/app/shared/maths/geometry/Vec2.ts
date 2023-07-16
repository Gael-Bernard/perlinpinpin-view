export default class Vec2 {

  constructor(
    readonly x: number,
    readonly y: number,
  ) { }

  public static ORIGIN = new Vec2(0.0, 0.0);
  public static ONEONE = new Vec2(1.0, 1.0);
  public static XPOS = new Vec2(1.0, 0.0);
  public static XNEG = new Vec2(-1.0, 0.0);
  public static YPOS = new Vec2(0.0, 1.0);
  public static YNEG = new Vec2(0.0, -1.0);

  public static SAME(value: number) {
    return new Vec2(value, value);
  }

  norm(): number {
    return Math.sqrt( (this.x * this.x) + (this.y * this.y) );
  }

  /**
   * An alias for norm()
   */
  length(): number {
    return this.norm();
  }

  /**
   * Tells if this vector is null, i.e the vector is (0.0, 0.0)
   * @returns true if vector is null, false otherwise
   */
  isNullVector(): boolean {
    return this.x === 0.0 && this.y === 0.0;
  }

  normalize(): Vec2 {
    if(this.isNullVector())
      throw new Error("Can't normalize the null vector");

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

  times(v: Vec2): Vec2 {
    return new Vec2( this.x * v.x, this.y * v.y );
  }

  dividedBy(v: Vec2): Vec2 {
    return new Vec2( this.x / v.x, this.y / v.y );
  }

  dividing(v: Vec2): Vec2 {
    return new Vec2( v.x / this.x, v.y / this.y );
  }

  inverse(): Vec2 {
    return new Vec2( 1.0 / this.x, 1.0 / this.y )
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

  map(func: ((v: number) => number) ): Vec2 {
    return new Vec2( func(this.x), func(this.y) );
  }


}
