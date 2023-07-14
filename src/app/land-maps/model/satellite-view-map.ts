import TempPerlin from "src/app/shared/maths/perlin/TempPerlin";
import Vec2 from '../../shared/maths/geometry/Vec2';


export default class SatelliteViewMap {

  readonly perlin = new TempPerlin(9748989);

  constructor(seed: number) {
  }

  get(vector: Vec2) {
    return this.perlin.at(vector);
  }

}
