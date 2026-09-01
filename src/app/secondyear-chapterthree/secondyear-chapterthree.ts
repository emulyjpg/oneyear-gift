import { Component, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

interface SentencePair {
  id: number;
  start: string;
  end: string;
}

@Component({
  selector: 'app-secondyear-chapterthree',
  imports: [MatIconModule, CommonModule, FormsModule],
  templateUrl: './secondyear-chapterthree.html',
  styleUrls: ['./secondyear-chapterthree.scss']
})
export class SecondYearChapterthree {
  constructor(private router: Router) {
    this.starts = this.shuffle([...this.pairs]);
    this.ends = this.shuffle([...this.pairs]);
  }
  shuffle<T>(array: T[]): T[] {
    return array
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  pairs: SentencePair[] = [
    { id: 1, start: 'Janie', end: 'Driving back to Cypress at crackhead hour.' },
    { id: 2, start: 'Emily', end: 'Hyping up a Partiful invite like it is Coachella.' },
    { id: 3, start: 'Michael', end: 'Destroying pasta at an Olive Garden.' },
    { id: 4, start: 'Alan', end: 'Napping in the corner with pillow in arms.' },
    { id: 5, start: 'Jeannette', end: 'At pilates class in a really cute fit.' },
    { id: 6, start: 'Syed', end: 'Playing pickleball on the court.' },
    { id: 7, start: 'Kasey', end: 'At a pop-up event in Houston.' },
    { id: 8, start: 'Alice', end: 'Wearing a cute fit at happy hour.' },
    { id: 9, start: 'Thien', end: 'Dapping up the boys poorly.' },
    { id: 10, start: 'Christian', end: 'Dominating in Catan.' },
    { id: 11, start: 'Christina', end: 'Grading 67 papers.' },
    { id: 12, start: 'Mohammad', end: 'Probably fleeing the country to his next destination.' },
    { id: 13, start: 'Vivian', end: 'Sabotaging The Mind Game.' },
    { id: 14, start: 'Fariha', end: 'Binging 40 C-drama episodes.' },
    { id: 15, start: 'Roan', end: 'At a rock concert headbanging.' },
    { id: 16, start: 'Miso', end: 'Purring suspiciously near the cup on the table.' },
    { id: 17, start: 'Aaron', end: 'On the run from a museum heist.' }
  ];
  starts: SentencePair[] = [];
  ends: SentencePair[] = [];

  selectedStart: SentencePair | null = null;
  selectedEnd: SentencePair | null = null;

  matchedIds: number[] = [];
  wrongFlash = false;
  winMessage = "Match the wanted poster!";



  @HostListener('window:keydown', ['$event'])
  handleKey(event: KeyboardEvent) {
    if (this.winMessage == "WIN!!" && event.key.toLowerCase() == "enter") {
      this.router.navigate(['second-year/chapterfour/parta']);
      return;
    }
  }

   selectStart(item: SentencePair) {
    if (this.matchedIds.includes(item.id)) return;
    this.selectedStart = item;
    this.checkMatch();
  }

  selectEnd(item: SentencePair) {
    if (this.matchedIds.includes(item.id)) return;
    this.selectedEnd = item;
    this.checkMatch();
  }

  checkMatch() {
    if (!this.selectedStart || !this.selectedEnd) return;

    if (this.selectedStart.id === this.selectedEnd.id) {
      this.matchedIds.push(this.selectedStart.id);

      if (this.matchedIds.length === this.pairs.length) {
        this.winMessage = 'WIN!!';
      }
    } else {
      this.wrongFlash = true;
      setTimeout(() => {
        this.wrongFlash = false;
      }, 300);
    }

    this.selectedStart = null;
    this.selectedEnd = null;
  }

  resetGame() {
    this.matchedIds = [];
    this.selectedStart = null;
    this.selectedEnd = null;
    this.starts = this.shuffle([...this.pairs]);
    this.ends = this.shuffle([...this.pairs]);
    this.winMessage = "Match the wanted poster!";
  }



}
