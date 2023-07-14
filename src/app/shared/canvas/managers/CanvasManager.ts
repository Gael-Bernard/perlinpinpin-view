import Vec2 from "src/app/shared/maths/geometry/Vec2";
import FontOptions from "../model/FontOptions";
import Rectangle from "src/app/shared/maths/geometry/Rectangle";
import SatelliteViewMap from "src/app/land-maps/model/satellite-view-map";

export default class CanvasManager2D {

  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement) {
    this.setCanvas(canvas);
    this.resetView();
  }

  getCanvas() {
    return this.canvas;
  }

  setCanvas(canvas: HTMLCanvasElement): void {
    this.canvas = canvas;

    let context = canvas.getContext('2d');
    if(context === null)
      throw new Error("Canvas context cannot be obtained.");
    this.ctx = context;
  }

  getContext(): CanvasRenderingContext2D {
    return this.ctx;
  }

  getWidth(): number {
    return this.canvas.width;
  }

  getHeight(): number {
    return this.canvas.height;
  }

  resetView(): void {
    /*
    let origin = new Vec2(0, 0);
    let expansion = new Vec2( this.getWidth(), this.getHeight() );
    this.drawPlainRectangle(new Rectangle(origin, expansion), "lightgray")
    this.drawText(new Vec2(0, 600), "Perlinpinpin", { font: "400px Arial", drawStyle: "darkred" });
    */
    const map: SatelliteViewMap = new SatelliteViewMap(1);
    for(let x=0; x < 15; x += 0.1) {
      for(let y=0; y < 15; y += 0.1) {
        let generated = map.get(new Vec2(x, y));
        console.log(generated)
        let val = (generated + 1) / 2;
        const rectangle: Rectangle = new Rectangle( new Vec2(x*80, y*80), new Vec2(8, 8) );
        this.drawPlainRectangle(rectangle, `rgb(${val*255}, ${val*255}, ${val*255})`);
      }
    }
  }

  drawPixel(coordinates: Vec2, fillStyle: string): void {
    this.ctx.fillStyle = fillStyle;
    this.ctx.fillRect(coordinates.x, coordinates.y, coordinates.x+1, coordinates.y+1);
    this.drawPlainRectangle(new Rectangle(coordinates, coordinates), fillStyle);
  }

  drawPlainRectangle(r: Rectangle, fillStyle: string): void {
    this.ctx.fillStyle = fillStyle;
    this.ctx.fillRect(r.origin.x, r.origin.y, r.expansion.x, r.expansion.y);
  }

  drawText(origin: Vec2, text: string, options: FontOptions) {
    if(options.font)
      this.ctx.font = options.font;

    if(options.drawStyle) {
      this.ctx.fillStyle = options.drawStyle;
    }

    this.ctx.fillText(text, origin.x, origin.y);
  }





}
