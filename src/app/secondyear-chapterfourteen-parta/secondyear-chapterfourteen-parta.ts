import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-secondyear-chapterfourteen-parta',
  imports: [MatIconModule, CommonModule, FormsModule],
  templateUrl: './secondyear-chapterfourteen-parta.html',
  styleUrl: './secondyear-chapterfourteen-parta.scss'
})
export class SecondYearChapterfourteenParta {
constructor(private router: Router) {}

  readonly targetClicks = 10;
  count = 0;
  winMessage = 'Keep feeding!';
  isWon = false;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.winMessage === 'WIN!!') {
      this.router.navigate(['second-year/chapterfifteen/parta']);
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
