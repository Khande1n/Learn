import {Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  width = 0;
  height = 0;
  Arr = Array;
  widthArr: number[];
  heightArr: number[];
  stepCount = 0;
  randomArr: Array<any>;
  moves = 0;
  playerLocation: Array<any>;
  isStarted: boolean;
  constructor() {}

  ngOnInit() {}
  @HostListener('document:keydown', ['$event']) onKeydownHandler(
    event: KeyboardEvent
  ) {
    if (this.isStarted) {
      switch (event.key) {
        case 'ArrowLeft':
          this.playerLocation[0] -= 1;
          this.moves++;
          break;
        case 'ArrowRight':
          this.playerLocation[0] += 1;
          this.moves++;
          break;
        case 'ArrowUp':
          this.playerLocation[1] -= 1;
          this.moves++;
          break;
        case 'ArrowDown':
          this.playerLocation[1] += 1;
          this.moves++;
          break;
      }
    }
    this.randomArr = this.randomArr.filter(
      box =>
        !(
          box[0] === this.playerLocation[0] && box[1] === this.playerLocation[1]
        )
    );
    if (this.randomArr.length === 0) {
    }
  }
  onKey(event: any) {
    this.width = parseInt(event.target.value);
    if (this.width > 0) {
      this.widthArr = Array(this.width);
      this.playerLocation[0] = Math.floor(this.width / 2);
    }
  }
  startGame() {
    this.playerLocation = [
      Math.floor(this.width / 2),
      Math.floor(this.height / 2)
    ];
    this.playerLocation[1] = Math.floor(this.height / 2);
    this.randomArr = Array(this.width)
      .fill(0)
      .map(() => {
        return [
          Math.floor(Math.random() * this.width),
          Math.floor(Math.random() * this.height)
        ];
      });
    this.isStarted = true;
  }
  onKey1(event: any) {
    // without type info
    this.height = parseInt(event.target.value);
    if (this.height > 0) {
      this.heightArr = Array(this.height);
    }
  }
  onMove(event: any) {
    console.log(event);
  }
}
