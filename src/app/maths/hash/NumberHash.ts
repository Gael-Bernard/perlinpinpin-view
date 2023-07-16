export default class NumberHash {

  public static simple(x: number): number {
    return 61333 * x % 16673;
  }

  public static seededSimple(x: number, seed: number): number {
    return seed * x % 16673;
  }

}
