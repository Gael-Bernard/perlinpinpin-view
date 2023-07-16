export default class Color {

  constructor(
    readonly red: number,
    readonly green: number,
    readonly blue: number,
    readonly alpha: number,
  ) {
    this.red = Math.floor(red);
    this.green = Math.floor(green);
    this.blue = Math.floor(blue);
    this.alpha = Math.floor(alpha);
    Color.checkBetween0And255(red, "red");
    Color.checkBetween0And255(green, "green");
    Color.checkBetween0And255(blue, "blue");
    Color.checkBetween0And1(alpha, "alpha");
  }

  public static of0To1(red: number, green: number, blue: number, alpha: number): Color {
    Color.checkBetween0And1(red, "red");
    Color.checkBetween0And1(green, "green");
    Color.checkBetween0And1(blue, "blue");
    return new Color(red*255, green*255, blue*255, alpha);
  }

  private static checkBetween0And255(val: number, name?: string): void {
    if(val < 0.0 || val > 255.0)
      throw new Error(`'${name}' must be between 0 and 255`);
  }

  private static checkBetween0And1(val: number, name?: string): void {
    if(val < 0.0 || val > 1.0)
      throw new Error(`'${name}' must be between 0.0 and 1.0`);
  }

  public static BLACK = new Color(0, 0, 0, 1.0);
  public static WHITE = new Color(255, 255, 255, 1.0);
  public static TRANSPARENT = new Color(0, 0, 0, 0.0);
  public static RED = new Color(255, 0, 0, 1.0);
  public static GREEN = new Color(0, 255, 0, 1.0);
  public static BLUE = new Color(0, 0, 255, 1.0);

  public static SKYBLUE = new Color(135, 206, 235, 1.0);
  public static BROWN = new Color(165, 42, 42, 1.0);

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
    return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`;
  }

}
