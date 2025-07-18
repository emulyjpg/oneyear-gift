import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chapterone-partb',
  imports: [MatIconModule, CommonModule, FormsModule],
  templateUrl: './chapterone-partb.html',
  styleUrl: './chapterone-partb.scss'
})
export class ChapteronePartb {
constructor(private router: Router) {}
  pos = { x: 180, y: 400 };
  readonly step = 20;
  readonly boxSize = 400;
  readonly charSize = 40;
  rockCount = 0;
  score = 0;
  winMessage = "Guess how many plates we can eat together!";
  readonly leftLeftPos = 0;
  readonly leftMiddlePos = 140;
  readonly rightMiddlePos = 260;
  readonly rightRightPos = 310;
characterImage = 'img/8bitfriendOG.png';
emilyImage = 'img/emilycheer.png';

  plateCount: number = 0; // Default value
  

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log('Key pressed:', event.key);
    if(event.key == "Enter" && this.winMessage == "WIN!!") {
      this.router.navigate(['chaptertwo']);
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

  onPlateCountChange(event: any) {
  const value = event.target.value;
  if (value.length > 3) {
    event.target.value = value.slice(0, 3);
    this.plateCount = parseInt(event.target.value, 10);
  } else {
    this.plateCount = parseInt(value, 10);
    if(this.plateCount == 815)
    {
      //the date we first met
      this.winMessage = "WIN!!";
    }
    else
    {
      //the date we first met
      this.winMessage = "Not quite right, try again!";
    }
  }
}

}
