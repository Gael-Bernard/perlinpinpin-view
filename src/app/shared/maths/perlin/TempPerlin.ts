import Perlin from "./Perlin"

export default class TempPerlin extends Perlin {

  constructor(readonly seed: number) {
    super();
  }

  protected override getSeed(): number {
    return this.seed;
  }

}
