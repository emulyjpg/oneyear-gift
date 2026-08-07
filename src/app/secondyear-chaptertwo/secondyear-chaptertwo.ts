import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-secondyear-chaptertwo',
  imports: [CommonModule],
  templateUrl: './secondyear-chaptertwo.html',
  styleUrl: './secondyear-chaptertwo.scss'
})
export class SecondYearChaptertwo {
  readonly targetClicks = 10;
  count = 0;
  winMessage = 'Keep clicking!';
  isWon = false;

  handleClick() {
    if (this.isWon) {
      return;
    }

    this.count++;

    if (this.count >= this.targetClicks) {
      this.isWon = true;
      this.winMessage = 'WIN!!';
    } else {
      this.winMessage = `Keep going! ${this.targetClicks - this.count} more click${this.targetClicks - this.count === 1 ? '' : 's'} to win.`;
    }
  }

  resetGame() {
    this.count = 0;
    this.winMessage = 'Keep clicking!';
    this.isWon = false;
  }
}
