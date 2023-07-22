import Rectangle from "src/app/maths/geometry/Rectangle";
import Vec2 from "src/app/maths/geometry/Vec2";
import FontOptions from "./FontOptions";
import NavigeableMapper from "src/app/maths/navigeable/NavigeableMapper";
import ChessboardRender from "src/app/canvas-renderers/simple/ChessboardRender";

export interface CanvasWriter2D {
  plainBackground(fillStyle: string): void;
  pixel(coordinates: Vec2, fillStyle: string): void;
  plainRectangle(r: Rectangle, fillStyle: string): void;
  text(origin: Vec2, text: string, options: FontOptions): void;
}

export interface LocalCanvasRenderer2D {
  renderArea(canvas: CanvasWriter2D, area: Rectangle): Promise<void>;
}

export default class CanvasManager2D implements CanvasWriter2D {

  DEFAULT_BGROUND_COLOR1: string = "#ff6161";
  DEFAULT_BGROUND_COLOR2: string = "#262626";
  private defaultRenderer = new ChessboardRender(this.DEFAULT_BGROUND_COLOR1, this.DEFAULT_BGROUND_COLOR2);

  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  readonly navigation: NavigeableMapper = new NavigeableMapper(Vec2.ONEONE, Vec2.ORIGIN);
  private renderer: LocalCanvasRenderer2D;

  constructor(canvas: HTMLCanvasElement, renderer: LocalCanvasRenderer2D) {
    this.setCanvas(canvas);
    this.renderer = renderer;
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

  getSize(): Vec2 {
    return new Vec2(this.getWidth(), this.getHeight());
  }

  getScale(): Vec2 {
    return this.navigation.getScale();
  }

  setScale(scale: Vec2): void {
    this.navigation.setScale(scale);
    this.render();
  }

  setScaleWithoutRender(scale: Vec2): void {
    this.navigation.setScale(scale);
  }

  getOffset(): Vec2 {
    return this.navigation.getOffset();
  }

  setOffset(navigationOffset: Vec2): void {
    this.navigation.setOffset(navigationOffset);
    this.render();
  }

  setOffsetWithoutRender(navigationOffset: Vec2): void {
    this.navigation.setOffset(navigationOffset);
  }

  getRenderer(): LocalCanvasRenderer2D {
    return this.renderer;
  }

  setRenderer(renderer: LocalCanvasRenderer2D): void {
    this.renderer = renderer;
    this.render();
  }

  render(): void {
    this.resetView();
    this.renderer.renderArea(this, this.navigation.absoluteFrameFor(this.getSize()) );
  }

  resetView(): void {
    this.defaultRenderer.renderArea(this, this.navigation.absoluteFrameFor(this.getSize()));
  }

  plainBackground(fillStyle: string): void {
    this.ctx.fillStyle = fillStyle;
    const topLeft = Vec2.ORIGIN;
    const expansion = this.getSize();
    this.ctx.fillRect(topLeft.x, topLeft.y, expansion.x, expansion.y);
  }

  pixel(coordinates: Vec2, fillStyle: string): void {
    this.ctx.fillStyle = fillStyle;
    const rectAbs = new Rectangle(coordinates, Vec2.ONEONE);
    const rectCanvas = this.navigation.toNavigationRect(rectAbs);
    this.ctx.fillRect(rectCanvas.origin.x, rectCanvas.origin.y, rectCanvas.expansion.x, rectCanvas.expansion.y);
  }

  plainRectangle(r: Rectangle, fillStyle: string): void {
    this.ctx.fillStyle = fillStyle;
    const rCanvas = this.navigation.toNavigationRect(r);
    this.ctx.fillRect(rCanvas.origin.x, rCanvas.origin.y, rCanvas.expansion.x, rCanvas.expansion.y);
  }

  text(origin: Vec2, text: string, options: FontOptions) {
    if(options.font)
      this.ctx.font = options.font;

    if(options.drawStyle) {
      this.ctx.fillStyle = options.drawStyle;
    }

    const canvOrigin = this.navigation.toNavigationVec2(origin);
    this.ctx.fillText(text, canvOrigin.x, canvOrigin.y);
  }

}
