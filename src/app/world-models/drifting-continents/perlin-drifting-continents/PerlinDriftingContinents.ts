import Color from "src/app/base-components/color/Color";
import Perlin from "src/app/generation/noise-functions/perlin/Perlin";
import Vec2 from "src/app/maths/geometry/Vec2";

export default class PerlinDriftingContinents {

  readonly overlapPerlin = new Perlin(this.seed * 7027);
  readonly originalLocPerlin = new Perlin(this.seed);
  readonly driftIntensityPerlin1 = new Perlin(this.seed * 8669);
  readonly driftIntensityPerlin2 = new Perlin(this.seed * 7589);
  readonly randomPerlinVectorX = new Perlin(this.seed * 14341);
  readonly randomPerlinVectorY = new Perlin(this.seed * 2411);
  readonly overlapPerlinScale = 32;
  readonly driftVectorPerlinScale = 256;
  readonly originalPerlinScale = 32;


  constructor(
    readonly seed: number,
    readonly maxDriftDistance: number,
  ) { }

  at(position: Vec2): Color {

    // How many drift origins
    const overlaps = this.howManyOverlaps(position);

    // First drifted source
    const driftVector1: Vec2 = this.perlinVec2FromPosition( position.stretch(1.0/this.driftVectorPerlinScale) ).stretch(this.maxDriftDistance);
    const driftedPosition1: Vec2 = position.plus( driftVector1 );
    let height = (this.originalLocPerlin.at(driftedPosition1.stretch(1.0/this.originalPerlinScale) ) + 1) / 4;

    // Second drifted source
    if(overlaps === 2) {
      const driftVector2: Vec2 = this.perlinVec2FromPosition( position.stretch(1.0/this.driftVectorPerlinScale) ).stretch(this.maxDriftDistance);
      const driftedPosition2: Vec2 = position.plus( driftVector2 );
      height = (this.originalLocPerlin.at(driftedPosition2.stretch(1.0/this.originalPerlinScale)) + 1) / 4;
    }

    // Colouring
    return this.getLandscapeColor(height);

  }

  private howManyOverlaps(position: Vec2): number {
    const overlapValue: number = (this.overlapPerlin.at(position.stretch(1.0/this.overlapPerlinScale)) + 1) /2;
    return overlapValue < -0.3 ? 1 : 2;
  }

  private getLandscapeColor(height: number): Color {
    if(height < 0.3) {
      const height01 = height * 0.75 / 0.3 + 0.25;
      return new Color(height01 * 80, height01 * 80, height01 * 255, 1.0);
    }
    else if(height < 0.6) {
      const height01 = (height - 0.3) * 0.75 / 0.3 + 0.25;
      return new Color(height01 * 80, height01 * 255, height01 * 80, 1.0);
    }
    else
      return Color.BROWN;
  }

  private perlinVec2FromPosition(position: Vec2): Vec2 {
    return new Vec2(
      this.randomPerlinVectorX.at(position),
      this.randomPerlinVectorY.at(position)
    );
  }

}
