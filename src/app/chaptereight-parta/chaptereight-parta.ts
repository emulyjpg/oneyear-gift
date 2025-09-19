import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface MemoryCard {
  icon: string;
  flipped: boolean;
  matched: boolean;
}

@Component({
  selector: 'app-chaptereight-parta',
  imports: [MatIconModule, CommonModule, FormsModule],
  templateUrl: './chaptereight-parta.html',
  styleUrl: './chaptereight-parta.scss'
})
export class ChaptereightParta {
  constructor(private router: Router) {}
  icons = [
    'img/sushi1.png',
    'img/sushi2.png',
    'img/sushi3.png',
    'img/sushi4.png',
    'img/sushi5.png',
    'img/sushi6.png',
    'img/sushi7.png',
    'img/sushi8.png'
  ];

  cards: MemoryCard[] = [];
  flippedIndices: number[] = [];
  matchedCount = 0;
  winMessage = "";

  ngOnInit() {
    this.resetGame();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log('Key pressed:', event.key);
    if(event.key == "Enter" && this.winMessage == "WIN!!") {
      this.router.navigate(['chapternine/parta']);
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

  resetGame() {
    const doubled = [...this.icons, ...this.icons];
    this.cards = this.shuffle(doubled).map(icon => ({ icon, flipped: false, matched: false }));
    this.flippedIndices = [];
    this.matchedCount = 0;
  }

  shuffle(array: string[]): string[] {
    return array
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  flipCard(index: number) {
    const card = this.cards[index];
    if (card.flipped || card.matched || this.flippedIndices.length === 2) return;
    card.flipped = true;
    this.flippedIndices.push(index);
    if (this.flippedIndices.length === 2) {
      setTimeout(() => this.checkMatch(), 800);
    }
    if(this.matchedCount === this.cards.length) {
      this.winMessage = "WIN!!";
    }
  }

  checkMatch() {
    const [i1, i2] = this.flippedIndices;
    if (this.cards[i1].icon === this.cards[i2].icon) {
      this.cards[i1].matched = true;
      this.cards[i2].matched = true;
      this.matchedCount += 2;
    } else {
      this.cards[i1].flipped = false;
      this.cards[i2].flipped = false;
    }
    this.flippedIndices = [];
    if (this.matchedCount === this.cards.length) {
      this.winMessage = "WIN!!";
    }
  }
}
