import Vec2 from "src/app/maths/geometry/Vec2";
import SimpleBiome2DBlock from "./UnicolorBlock2D";
import MultilayerPerlin from "src/app/generation/noise-functions/perlin/MultilayerPerlin";
import UnicolorBlock2D from './UnicolorBlock2D';
import Color from "src/app/base-components/color/Color";
import Perlin from "src/app/generation/noise-functions/perlin/Perlin";

export default class SimpleBiome2DGenerator {

  public groundColor: Color = Color.BROWN;
  public skyColor: Color = Color.SKYBLUE;
  public oceanColor: Color = Color.BLUE;
  public minGroundAltitude: number = 24;
  public minOceanAltitude: number = 4;
  public biomeNoiseAmplitude: number = 64;
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
    if(biomeVal < 0.5) { // land
      return new UnicolorBlock2D( position.y > value01 * 16 + this.minGroundAltitude ? this.skyColor : this.groundColor);
    }
    else { // ocean
      if(position.y <= value01 * 16 + this.minOceanAltitude) {
        return new UnicolorBlock2D(this.groundColor);
      }
      return new UnicolorBlock2D( position.y > this.seaLevel ? this.skyColor : this.oceanColor);
    }
  }

}
