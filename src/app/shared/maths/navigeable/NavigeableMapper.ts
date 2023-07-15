import Rectangle from "../geometry/Rectangle";
import Vec2 from "../geometry/Vec2";

export default class NavigeableMapper {

  private scale: Vec2;
  private scaleInverse: Vec2;
  private navigationOffset: Vec2;

  constructor(scale: Vec2, navigationOffset: Vec2) {
    this.scale = scale;
    this.scaleInverse = scale.inverse();
    this.navigationOffset = navigationOffset;
  }

  getScale(): Vec2 {
    return this.scale;
  }

  setScale(scale: Vec2): void {
    this.scale = scale;
    this.scaleInverse = scale.inverse();
  }

  getOffset(): Vec2 {
    return this.navigationOffset;
  }

  setOffset(navigationOffset: Vec2): void {
    this.navigationOffset = navigationOffset;
  }

  toNavigationVec2(v: Vec2): Vec2 {
    return v.minus(this.navigationOffset).times(this.scale);
  }

  toAbsoluteVec2(v: Vec2): Vec2 {
    return v.times(this.scaleInverse).plus(this.navigationOffset);
  }

  toNavigationRect(r:Rectangle): Rectangle {
    return new Rectangle(
      this.toNavigationVec2(r.origin),
      r.expansion.times(this.scale)
    );
  }

  toAbsoluteRect(r: Rectangle): Rectangle {
    return new Rectangle(
      this.toAbsoluteVec2(r.origin),
      r.expansion.times(this.scaleInverse)
    );
  }

  absoluteFrameFor(navigationSize: Vec2): Rectangle {
    const expansion = this.absoluteXYMaxFor(navigationSize);
    return new Rectangle( this.navigationOffset, expansion );
  }

  absoluteXYMaxFor(navigationSize: Vec2): Vec2 {
    return navigationSize.times(this.scaleInverse);
  }

}
