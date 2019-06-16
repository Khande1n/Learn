import {Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit, OnChanges {
  @Input() xcord: number;
  @Input() ycord: number;
  @Input() playerLocation: number[];
  @Input() greenBox: number[][];
  showGreen: Array<any>;

  constructor() {}

  ngOnInit() {}
  ngOnChanges() {
    Object.defineProperty(Array.prototype, 'equals', {enumerable: false});
    this.showGreen = this.greenBox.filter(
      box => box[0] === this.xcord && box[1] === this.ycord
    )[0];
    console.log(this.showGreen);
  }
}
