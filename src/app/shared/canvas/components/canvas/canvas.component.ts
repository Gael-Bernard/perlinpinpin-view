import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber, subscribeOn } from 'rxjs';
import CanvasManager2D from '../../managers/CanvasManager';
import Vec2 from 'src/app/shared/maths/geometry/Vec2';
import Rectangle from 'src/app/shared/maths/geometry/Rectangle';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

  canvasManager!: CanvasManager2D;

  @ViewChild("canvas", {static: true})
  canvas!: ElementRef<HTMLCanvasElement>;

  @Input()
  canvasLoadListener: BehaviorSubject<CanvasManager2D|undefined>|undefined
    = new BehaviorSubject(undefined) as BehaviorSubject<CanvasManager2D|undefined>;


  ngOnInit(): void {

    this.canvasManager = new CanvasManager2D(this.canvas.nativeElement);

    if(this.canvasLoadListener === undefined) {
      throw new Error("The canvas does not have a listener property. No interaction with the canvas is possible.");
    }

    this.canvasManager
    this.canvasLoadListener.next(this.canvasManager);
  }

  draw() {
    let origin = new Vec2(0, 0);
    let expansion = new Vec2(this.canvasManager.getWidth(), this.canvasManager.getHeight());
    let rectangle = new Rectangle(origin, expansion);
    this.canvasManager.drawPlainRectangle(rectangle, "darkred");
  }

  coordinates = new Vec2(0,0);
  draw2() {
    for(let i=0; i < 10; i++) {
      this.canvasManager.drawPixel(this.coordinates, "darkgray");
      this.coordinates = this.coordinates.plus(new Vec2(1, 1));
    }
  }

}
