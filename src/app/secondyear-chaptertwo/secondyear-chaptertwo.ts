import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secondyear-chaptertwo',
  imports: [CommonModule],
  templateUrl: './secondyear-chaptertwo.html',
  styleUrl: './secondyear-chaptertwo.scss'
})
export class SecondYearChaptertwo {
  constructor(private router: Router) {}

  readonly targetClicks = 10;
  count = 0;
  winMessage = 'Keep feeding!';
  isWon = false;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.winMessage === 'WIN!!') {
      this.router.navigate(['second-year/chapterthree']);
    }
  }

  handleClick() {
    if (this.isWon) {
      return;
    }

    this.count++;

    if (this.count >= this.targetClicks) {
      this.isWon = true;
      this.winMessage = 'WIN!!';
    } else {
      this.winMessage = `Keep feeding!`;
    }
  }

  resetGame() {
    this.count = 0;
    this.winMessage = 'Keep feeding!';
    this.isWon = false;
  }
}
