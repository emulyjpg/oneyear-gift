import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Ingredient {
  id: number;
  name: string;
  icon: string; //path to png
}

@Component({
  selector: 'app-secondyear-chapterone',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './secondyear-chapterone.component.html',
  styleUrls: ['./secondyear-chapterone.component.scss']
})
export class SecondYearChapterOne {
constructor(private router: Router) {}
  pos = { x: 180, y: 400 };
  readonly step = 20;
  readonly boxSize = 400;
  readonly charSize = 40;
  rockCount = 0;
  score = 0;
  winMessage = "send it!";
  readonly leftLeftPos = 0;
  readonly leftMiddlePos = 140;
  readonly rightMiddlePos = 260;
  readonly rightRightPos = 310;
characterImage = 'img/8bitfriendOG.png';
emilyImage = 'img/emilycheer.png';

 ingredients: Ingredient[] = [
    { id: 1, name: 'Sake', icon: 'img/sake.png' },
    { id: 2, name: 'Salmon', icon: 'img/salmon.png' },
    { id: 3, name: 'Tuna', icon: 'img/tuna.png' },
    { id: 4, name: 'Yellowtail', icon: 'img/yellowtail.png' },
    { id: 5, name: 'Amberjack', icon: 'img/amberjack.png' },
    { id: 6, name: 'Yellowtail', icon: 'img/yellowtail.png' },
    { id: 7, name: 'Scallop', icon: 'img/scallop.png' }
  ];

  plate: Ingredient[] = [];

  dragging: Ingredient | null = null;
  success = false;

  startDrag(ingredient: Ingredient) {
    this.dragging = ingredient;
  }

  dropIngredient() {
    if (this.dragging) {
      this.plate.push(this.dragging);
      this.dragging = null;
      this.checkOrder();
    }
  }

  checkOrder() {
   if (this.plate.length === this.ingredients.length) {
    this.success = true;
  }
  }

  resetGame() {
    this.plate = [];
    this.success = false;
  }
}
