import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chapterseven-parta',
  imports: [MatIconModule, CommonModule, FormsModule],
  templateUrl: './chapterseven-parta.html',
  styleUrl: './chapterseven-parta.scss'
})
export class ChaptersevenParta {
constructor(private router: Router) {}
  pos = { x: 180, y: 400 };
  readonly step = 20;
  readonly boxSize = 400;
  readonly charSize = 40;
  loadCount = 36;
  score = 0;
  winMessage = "Finish the pounds...";

  plateCount: number = 0; // Default value
  

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log('Key pressed:', event.key);
    if(event.key == "Enter" && this.winMessage == "WIN!!") {
      this.router.navigate(['chaptereight/parta']);
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



  loading()
  {
    if(this.loadCount > 0)
    {
      this.loadCount--;
    }
    console.log(this.loadCount);
    if(this.loadCount == 0)
    {
      console.log("WIN!!");
      this.winMessage = "WIN!!";
    }
  }
}
