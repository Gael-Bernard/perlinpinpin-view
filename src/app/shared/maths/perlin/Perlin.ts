import Vec2 from '../geometry/Vec2';
import LinearInterpolation from '../interpolation/LinearInterpolation';
import RandomVec2 from "../random/RandomVec2";
import { Vec2Square, dotProductByField, mapVec2SquareByField, NumberSquare } from './ValueSquare';



export default abstract class Perlin {

  protected abstract getSeed(): number;

  private getSurroundingNodes(position: Vec2): Vec2Square {
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

  private mapSurroundingNodesToVectors(surroundings: Vec2Square): Vec2Square {
    const seed = this.getSeed();
    return mapVec2SquareByField(surroundings, (v) => RandomVec2.mapSeededSimpleHash(v, seed+11) );
  }

  private mapSurroundingNodesToRelativeVectors(surroundings: Vec2Square, position: Vec2): Vec2Square {
    return mapVec2SquareByField(surroundings, (v) => position.minus( v ).normalize());
  }

  private interpolateDotProducts(val: NumberSquare, position: Vec2) {
    const x = position.x - Math.floor(position.x);
    const y = position.y - Math.floor(position.y);
    const leftInterpolation = LinearInterpolation.applyForDx1(val.topLeft, val.bottomLeft, y);
    const rightInterpolation = LinearInterpolation.applyForDx1(val.topRight, val.bottomRight, y);
    return LinearInterpolation.applyForDx1(leftInterpolation, rightInterpolation, x);
  }

  public at(position: Vec2): number {

    const surroundingNodes: Vec2Square = this.getSurroundingNodes(position);
    console.log("surroundingNodes", surroundingNodes)

    const surroundingVectors: Vec2Square = this.mapSurroundingNodesToVectors(surroundingNodes);
    console.log("surroundingVectors", surroundingVectors)
    const relativeVectors: Vec2Square = this.mapSurroundingNodesToRelativeVectors(surroundingNodes, position);
    console.log("relativeVectors", relativeVectors)

    const dotProducts: NumberSquare = dotProductByField(surroundingVectors, relativeVectors);
    console.log("dotProducts", dotProducts)
    const interpolation: number = this.interpolateDotProducts(dotProducts, position);
    console.log("interpolation", interpolation)

    return interpolation;
  }

}
