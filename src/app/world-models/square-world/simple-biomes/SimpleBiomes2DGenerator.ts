import Vec2 from "src/app/maths/geometry/Vec2";
import SimpleBiome2DBlock from "./UnicolorBlock2D";
import MultilayerPerlin from "src/app/generation/noise-functions/perlin/MultilayerPerlin";
import UnicolorBlock2D from './UnicolorBlock2D';
import Color from "src/app/base-components/color/Color";
import Perlin from "src/app/generation/noise-functions/perlin/Perlin";
import LinearInterpolation from "src/app/maths/interpolation/LinearInterpolation";

export default class SimpleBiome2DGenerator {

  public groundColor: Color = Color.BROWN;
  public skyColor: Color = Color.SKYBLUE;
  public oceanColor: Color = Color.BLUE;
  public minGroundAltitude: number = 24;
  public minOceanAltitude: number = 4;
  public biomeNoiseAmplitude: number = 256;
  public seaLevel: number = 20;

  private landscape!: MultilayerPerlin;
  private biomeNoise!: Perlin;

  constructor(
    readonly seed: number,
  ) {
    this.initLandscapeNoise();
    this.initBiomeNoise();
  }

  private initLandscapeNoise(): void {
    this.landscape = new MultilayerPerlin([
      {
        seed: this.seed,
        amplitude: 8,
        stretch: new Vec2(8, 1),
      },
      {
        seed: this.seed,
        amplitude: 16,
        stretch: new Vec2(16, 1),
      },
      {
        seed: this.seed,
        amplitude: 32,
        stretch: new Vec2(32, 1),
      }
    ]);
  }

  private initBiomeNoise(): void {
    this.biomeNoise = new Perlin(this.seed * 11927);
  }

  get(position: Vec2): SimpleBiome2DBlock {
    const value01 = (this.landscape.at( new Vec2(Math.floor(position.x), 0.3) ) + 1) / 2;
    const biomeVal = (this.biomeNoise.at( new Vec2(position.x / this.biomeNoiseAmplitude, 0.3) ) + 1) / 2;
    if(biomeVal < 0.45) { // land
      return new UnicolorBlock2D( position.y > value01 * 16 + this.minGroundAltitude ? this.skyColor : this.groundColor);
    }
    else if(biomeVal > 0.55) { // ocean
      if(position.y <= value01 * 16 + this.minOceanAltitude) {
        return new UnicolorBlock2D(this.groundColor);
      }
      return new UnicolorBlock2D( position.y > this.seaLevel ? this.skyColor : this.oceanColor);
    }
    else { // transition ocean/land
      const oceanity = (biomeVal - 0.45) * 10;
      const ySkyline = LinearInterpolation.applyForDx1(value01 * 16 + this.minGroundAltitude, value01 * 16 + this.minOceanAltitude, oceanity);
      if(position.y <= ySkyline) {
        return new UnicolorBlock2D(this.groundColor);
      }
      else {
        return new UnicolorBlock2D( position.y > this.seaLevel ? this.skyColor : this.oceanColor);
      }
    }
  }

}
