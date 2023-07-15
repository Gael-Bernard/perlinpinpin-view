export default class Color {

  constructor(
    readonly red: number,
    readonly green: number,
    readonly blue: number,
    readonly alpha: number,
  ) {
    this.checkBetween0And1(red, "red");
    this.checkBetween0And1(green, "green");
    this.checkBetween0And1(blue, "blue");
    this.checkBetween0And1(alpha, "alpha");
  }

  private checkBetween0And1(val: number, name?: string): void {
    if(val < 0.0 || val > 1.0)
      throw new Error(`'${name} must be between 0.0 and 1.0`);
  }

  public static BLACK = new Color(0.0, 0.0, 0.0, 1.0);
  public static WHITE = new Color(1.0, 1.0, 1.0, 1.0);
  public static TRANSPARENT = new Color(0.0, 0.0, 0.0, 0.0);
  public static RED = new Color(1.0, 0.0, 0.0, 1.0);
  public static GREEN = new Color(0.0, 1.0, 0.0, 1.0);
  public static BLUE = new Color(0.0, 0.0, 1.0, 1.0);

  public static grey(intensity: number): Color {
    return new Color(intensity, intensity, intensity, 1.0);
  }

  linearInterpolate(c2: Color, t: number): Color {
    return new Color(
      (c2.red - this.red) * t + this.red,
      (c2.green - this.green) * t + this.green,
      (c2.blue - this.blue) * t + this.blue,
      (c2.alpha - this.alpha) * t + this.alpha,
    );
  }

  toCSS(): string {
    return `rgba(${this.red*255}, ${this.green*255}, ${this.blue*255}, ${this.alpha})`;
  }

}
