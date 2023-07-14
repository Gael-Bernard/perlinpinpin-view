import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import CanvasManager2D from '../../managers/CanvasManager';

@Component({
  selector: 'app-fullscreen-canvas',
  templateUrl: './fullscreen-canvas.component.html',
  styleUrls: ['./fullscreen-canvas.component.scss']
})
export class FullscreenCanvasComponent implements OnInit {

  canvasManager!: CanvasManager2D;

  @ViewChild("canvas", {static: true})
  canvas!: ElementRef<HTMLCanvasElement>;

  @Input()
  canvasLoadListener!: Subject<CanvasManager2D|undefined>;


  ngOnInit(): void {

    this.canvasManager = new CanvasManager2D(this.canvas.nativeElement);

    if(this.canvasLoadListener === undefined) {
      throw new Error("The canvas does not have a listener property. No interaction with the canvas is possible.");
    }

    this.canvasManager
    this.canvasLoadListener.next(this.canvasManager);
  }

}
