import Vec2 from 'src/app/maths/geometry/Vec2';
import { Vec2Square, dotProductByField, mapVec2SquareByField, NumberSquare } from './ValueSquare';
import LinearInterpolation from 'src/app/maths/interpolation/LinearInterpolation';
import RandomVec2 from 'src/app/maths/random/RandomVec2';
import NoiseFunction from '../NoiseFunction';



export default class Perlin implements NoiseFunction {

  constructor(readonly seed: number) { }

  private static getSurroundingNodes(position: Vec2): Vec2Square {
    const xTopLeft = Math.floor(position.x);
    const yTopLeft = Math.floor(position.y);
    const topLeft = new Vec2(xTopLeft, yTopLeft);
    return {
      topLeft: topLeft,
      topRight: topLeft.plus(new Vec2(1, 0)),
      bottomLeft: topLeft.plus(new Vec2(0, 1)),
      bottomRight: topLeft.plus(new Vec2(1, 1)),
    }
  }

  private static unroundPosition(position: Vec2): Vec2 {
    const x = position.x === Math.floor(position.x) ? position.x + 0.000_000_000_001 : position.x;
    const y = position.y === Math.floor(position.y) ? position.y + 0.000_000_000_001 : position.y;
    return new Vec2(x, y);
  }

  private static mapSurroundingNodesToVectors(surroundings: Vec2Square, seed: number): Vec2Square {
    return mapVec2SquareByField(surroundings, (v) => RandomVec2.mapSeededCosineSineSimpleHash(v, seed) );
  }

  private static mapSurroundingNodesToRelativeVectors(surroundings: Vec2Square, position: Vec2): Vec2Square {
    return mapVec2SquareByField(surroundings, (v) => position.minus( v ).normalize());
  }

  private static easeInOutSine(x: number): number {
    return -(Math.cos(Math.PI * x) - 1) / 2;
  }

  private static interpolateDotProducts(val: NumberSquare, position: Vec2) {
    let {x, y} = position.map(n => this.easeInOutSine(n - Math.floor(n)) );
    const leftInterpolation = LinearInterpolation.applyForDx1(val.topLeft, val.bottomLeft, y);
    const rightInterpolation = LinearInterpolation.applyForDx1(val.topRight, val.bottomRight, y);
    return LinearInterpolation.applyForDx1(leftInterpolation, rightInterpolation, x);
  }

  public static at(position: Vec2, seed: number) {
    position = this.unroundPosition(position);

    const surroundingNodes: Vec2Square = this.getSurroundingNodes(position);

    const surroundingVectors: Vec2Square = this.mapSurroundingNodesToVectors(surroundingNodes, seed);
    const relativeVectors: Vec2Square = this.mapSurroundingNodesToRelativeVectors(surroundingNodes, position);

    const dotProducts: NumberSquare = dotProductByField(surroundingVectors, relativeVectors);
    const interpolation: number = this.interpolateDotProducts(dotProducts, position);

    return interpolation;
  }

  public at(position: Vec2): number {
    return Perlin.at(position, this.seed);
  }

}
