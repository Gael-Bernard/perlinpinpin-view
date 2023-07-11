import Vec2 from "src/app/util/maths/Vec2";
import Rectangle from '../../util/maths/Rectangle';
import FontOptions from "../model/FontOptions";

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
    let origin = new Vec2(0, 0);
    let expansion = new Vec2( this.getWidth(), this.getHeight() );
    this.drawPlainRectangle(new Rectangle(origin, expansion), "lightgray")
    this.drawText(new Vec2(0, 600), "Perlinpinpin", { font: "400px Arial", drawStyle: "darkred" });
  }

  drawPixel(coordinates: Vec2, fillStyle: string): void {
    this.ctx.fillStyle = fillStyle;
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
