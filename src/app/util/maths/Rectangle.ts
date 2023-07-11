import Vec2 from './Vec2';


export default class Rectangle {

  /**
   * @param origin Bottom left corner of the rectangle
   * @param expansion Vector translating the bottom left to the top right corner
   */
  constructor(
    readonly origin: Vec2,
    readonly expansion: Vec2,
  ) {
    if(this.expansion.x < 0 || this.expansion.y < 0)
      throw new Error("'expansion' must be positive.");
  }

  width(): number {
    return this.expansion.x;
  }

  height(): number {
    return this.expansion.y;
  }

  area(): number {
    return this.expansion.x * this.expansion.y;
  }

  perimeter(): number {
    return (2 * this.expansion.x) + (2 * this.expansion.y);
  }


}
