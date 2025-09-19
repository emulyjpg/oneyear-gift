import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chapterfour-parta',
  imports: [MatIconModule, CommonModule, FormsModule],
  templateUrl: './chapterfour-parta.html',
  styleUrl: './chapterfour-parta.scss'
})
export class ChapterfourParta {
constructor(private router: Router) {}
   pos = 0;
  readonly step = 20;
  readonly boxSize = 400;
  readonly charSize = 40;
  rockCount = 0;
  score = 0;
  winMessage = "Open that flag!";
posImage = 'img/flagpos0.png';
winOriginal = false;
winOne = false;
winTwo = false;

  plateCount: number = 0; // Default value
  

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log('Key pressed:', event.key);
    
    if((event.key == "ArrowUp" || event.key == "w") && this.winMessage !== "WIN!!") {
        this.move('up');
    }
    else if((event.key == "ArrowDown" || event.key == "s") && this.winMessage !== "WIN!!") {
        this.move('down');
    }
    // else if(event.key == "Enter" && this.winMessage != "WIN!!" && this.winMessage != "FULL WIN!!") {
    //   console.log("Time to GRAB!");
    //   this.submit();
    // }
    else if(event.key == "Enter" && this.winMessage == "WIN!!")
    {
      this.router.navigate(['chapterfive/parta']);
    }
  }

  move(direction?: any) {
    console.log(direction);

    // Update position
    if (direction === "up" && this.pos < 12) {
      this.pos += 1;
    } else if (direction === "down" && this.pos > 0) {
      this.pos -= 1;
    } else {
      console.log(`Unhandled direction: ${direction}`);
      return;
    }

    // Set PNG image
    this.posImage = this.getImagePath(this.pos, ".png");
    console.log(this.posImage);

    if (this.pos == 12) {
      this.winMessage = "WIN!!";
      this.winOriginal = true;
    }
   
  }



  getImagePath(pos: number, variant: string = "", extension: string = ".png"): string {
  const prefix = pos < 0 ? `flagpos${pos}` : `flagpos${pos}`;
  return `img/${prefix}${extension}`;
}
}
