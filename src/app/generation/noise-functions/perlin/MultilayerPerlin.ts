import Vec2 from "src/app/maths/geometry/Vec2";
import NoiseFunction from "../NoiseFunction";
import PerlinLayer from "./PerlinLayer";
import Perlin from "./Perlin";

export default class MultilayerPerlin implements NoiseFunction {

  public _max!: number;

  constructor(
    readonly layers: PerlinLayer[],
  ) {
    this.updateMax();
  }

  updateMax() {
    this._max = this.layers.reduce( (sum, layer) => sum + layer.amplitude, 0.0);
  }

  at(position: Vec2): number {
    return this.layers.reduce(
      (sum, layer) => sum + layer.amplitude * Perlin.at(position.dividedBy(layer.stretch), layer.seed)
    , 0.0) / this._max;
  }

}
