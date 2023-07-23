import Vec2 from "src/app/maths/geometry/Vec2";
import SimpleBiome2DBlock from "./UnicolorBlock2D";
import MultilayerPerlin from "src/app/generation/noise-functions/perlin/MultilayerPerlin";
import UnicolorBlock2D from "./UnicolorBlock2D";
import Color from "src/app/base-components/color/Color";

export default class SimpleBiome2DGenerator {

  public groundColor: Color = Color.GREEN;
  public skyColor: Color = Color.SKYBLUE;
  public minAltitude: number = 24;

  private landscape!: MultilayerPerlin;

  constructor(
    readonly seed: number,
  ) {
    this.initLandscapeNoise();
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


  get(position: Vec2): SimpleBiome2DBlock {
    const value01 = (this.landscape.at( new Vec2(Math.floor(position.x), 0.3) ) + 1) / 2;
    return position.y > value01 * 16 + this.minAltitude  ? new UnicolorBlock2D(this.skyColor) : new UnicolorBlock2D(this.groundColor);
  }

}
