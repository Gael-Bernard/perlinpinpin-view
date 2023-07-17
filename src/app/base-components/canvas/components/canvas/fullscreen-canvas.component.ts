import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-fullscreen-canvas',
  templateUrl: './fullscreen-canvas.component.html',
  styleUrls: ['./fullscreen-canvas.component.scss']
})
export class FullscreenCanvasComponent implements OnInit {

  @ViewChild("canvas", {static: true})
  canvas!: ElementRef<HTMLCanvasElement>;

  @Input()
  canvasLoadListener!: Subject<HTMLCanvasElement>;


  ngOnInit(): void {

    if(this.canvasLoadListener !== undefined) {
      this.canvasLoadListener.next(this.canvas.nativeElement);
    }

  }

  getCanvasElement(): HTMLCanvasElement {
    return this.canvas.nativeElement;
  }

}
