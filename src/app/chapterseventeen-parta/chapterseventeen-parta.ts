import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chapterseventeen-parta',
  imports: [MatIconModule, CommonModule, FormsModule],
  templateUrl: './chapterseventeen-parta.html',
  styleUrl: './chapterseventeen-parta.scss'
})
export class ChapterseventeenParta {
  constructor(private router: Router) {}
  winMessage = "Spot the Chicago Architecture!";
  buildings = [
    { name: 'Willis Tower', img: 'img/willistower.png' },
    { name: 'The MART', img: 'img/themart.png' },
    { name: 'Trump Tower', img: 'img/trumptower.png' },
    { name: 'St. Regis', img: 'img/stregis.png' },
    { name: 'Wrigley Building', img: 'img/wrigleybuilding.png' }
  ];
  found = [false, false, false, false, false];
  guesses = ['', '', '', '', ''];
  isWinner = false;
  currentIndex = 0;
  hints = ['', '', '', '', ''];
  wrongGuesses = [0, 0, 0, 0, 0];

  submitGuess() {
    const guessLowerCased = this.guesses[this.currentIndex].trim().toLowerCase();
    const answerLowerCased = this.buildings[this.currentIndex].name.trim().toLowerCase();
    if (guessLowerCased === answerLowerCased) {
      this.found[this.currentIndex] = true;
      if (this.currentIndex < this.buildings.length - 1) {
        this.currentIndex++;
      }
      this.checkWin();
    } else {
      this.wrongGuesses[this.currentIndex]++;
      this.hints[this.currentIndex] = this.buildings[this.currentIndex].name.substring(0, this.wrongGuesses[this.currentIndex]);
      this.winMessage = "Not quite right, try again!";
    }
  }

  checkWin() {
    this.isWinner = this.found.every(f => f);
    if(this.isWinner) {
      this.winMessage = "WIN!!";
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log('Key pressed:', event.key);
    if(event.key == "Enter" && this.winMessage != "WIN!!") {
      this.submitGuess();
    }
    else if(event.key == "Enter" && this.winMessage == "WIN!!") {
      this.router.navigate(['chapterfinal/parta']);
    }
    // else if((event.key == "ArrowLeft" || event.key == "a") && this.winMessage !== "WIN!!") {
    //     this.move('left');
    // }
    // else if((event.key == "ArrowRight" || event.key == "d") && this.winMessage !== "WIN!!") {
    //     this.move('right');
    //}
    // Add custom logic here based on the pressed key
    // For example, trigger a function or update a property
  }
}
