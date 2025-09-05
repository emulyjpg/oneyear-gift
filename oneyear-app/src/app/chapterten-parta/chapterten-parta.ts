import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { pixelGrid, PixelGrid } from '../../assets/painting-grid/pixel-grid-2';

@Component({
  selector: 'app-chapterten-parta',
  imports: [CommonModule],
  templateUrl: './chapterten-parta.html',
  styleUrl: './chapterten-parta.scss'
})
export class ChaptertenParta {
  constructor(private router: Router) {}
  pos = { x: 50, y: 240 };
  readonly step = 20;
  readonly boxSize = 400;
  readonly charSize = 40;
  walkCount = 0;
  score = 0;
  winMessage = "How beautiful!";
  readonly leftLeftPos = 0;
  readonly leftMiddlePos = 140;
  readonly rightMiddlePos = 260;
  readonly rightRightPos = 310;
characterImage = 'img/museumcouple.png';

  move(direction?: any) {
    console.log(direction);
    
    if(this.walkCount < 18 && direction === "right"  && this.winMessage !== "WIN!!")
    {
      this.pos.x+=20;
      this.walkCount++;
      console.log(this.walkCount);
      if(this.walkCount == 18)
      {
        this.winMessage = "WIN!!";
      }
    }
    else if(this.walkCount > 0 && direction === "left" && this.winMessage !== "WIN!!")
    {
      this.pos.x-=20;
      this.walkCount--;
      console.log(this.walkCount);
    }
    
  }
  

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log('Key pressed:', event.key);
    if(event.key == "Enter" && this.winMessage == "WIN!!") {
      this.router.navigate(['chaptereleven/parta']);
    }
    else if((event.key == "ArrowLeft" || event.key == "a") && this.winMessage !== "WIN!!") {
        this.move('left');
    }
    else if((event.key == "ArrowRight" || event.key == "d") && this.winMessage !== "WIN!!") {
        this.move('right');
    }
    // Add custom logic here based on the pressed key
    // For example, trigger a function or update a property
  }

}
