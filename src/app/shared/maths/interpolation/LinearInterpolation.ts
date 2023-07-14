export default class LinearInterpolation {

  public static applyForDx1(y1: number, y2: number, t: number) {
    return (y2 - y1) * t + y1;
  }

}
