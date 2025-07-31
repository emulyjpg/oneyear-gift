import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chapterone-partc',
  imports: [MatIconModule, CommonModule, FormsModule],
  templateUrl: './chapterone-partc.html',
  styleUrl: './chapterone-partc.scss'
})
export class ChapteronePartc {
constructor(private router: Router) {}
  pos = -12;
  readonly step = 20;
  readonly boxSize = 400;
  readonly charSize = 40;
  rockCount = 0;
  score = 0;
  winMessage = "Claw Machine Time!";
posImage = 'img/clawpos-12.png';
winOriginal = false;
winOne = false;
winTwo = false;

  plateCount: number = 0; // Default value
  

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log('Key pressed:', event.key);
    
    if((event.key == "ArrowLeft" || event.key == "a") && this.winMessage !== "WIN!!") {
        this.move('left');
    }
    else if((event.key == "ArrowRight" || event.key == "d") && this.winMessage !== "WIN!!") {
        this.move('right');
    }
    else if(event.key == "Enter" && this.winMessage != "WIN!!" && this.winMessage != "FULL WIN!!") {
      console.log("Time to GRAB!");
      this.submit();
    }
    else if(event.key == "Enter" && this.winMessage == "WIN!!" && this.winOriginal === true && this.winOne === true && this.winTwo === false)
    {
      this.pos = -12;
      this.posImage = 'img/1-clawpos-12.png';
      this.winMessage = "Claw Machine Time!";
    }
    else if(event.key == "Enter" && this.winMessage == "WIN!!" && this.winOriginal === true && this.winOne === false && this.winTwo === true)
    {
      this.pos = -12;
      this.posImage = 'img/2-clawpos-12.png';
      this.winMessage = "Claw Machine Time!";
    }
    else if(event.key == "Enter" && this.winMessage == "WIN!!" && this.winOriginal === true && this.winOne === true && this.winTwo === true) {
      this.posImage = 'img/arcade.gif';
      this.winMessage = "FULL WIN!!";
    }
    else if(event.key == "Enter" && this.winMessage == "FULL WIN!!") {
      this.router.navigate(['chaptertwo']);
    }
  }

  move(direction?: any) {
    console.log(direction);

    // Update position
    if (direction === "left" && this.pos > -12) {
      this.pos -= 1;
    } else if (direction === "right" && this.pos < 12) {
      this.pos += 1;
    } else {
      console.log(`Unhandled direction: ${direction}`);
      return;
    }

    // Determine win variant
    let variant = "";
    if (this.winOriginal === true && this.winOne === true && this.winTwo === false) {
      variant = "1-";
    } else if (this.winOriginal === true && this.winOne === false && this.winTwo === true) {
      variant = "2-";
    }

    // Set PNG image
    this.posImage = this.getImagePath(this.pos, variant, ".png");
    console.log(this.posImage);
   
  }


  
submit(direction?: any) {
  let variant = "";
  const extension = "-gif.gif";

  // Determine variant based on win state
  if (this.winOriginal === true && this.winOne === true && this.winTwo === false) {
    variant = "1-";
  } else if (this.winOriginal === true && this.winOne === false && this.winTwo === true) {
    variant = "2-";
  }

  // Trigger win state changes
  if (this.winOriginal === false) {
    if (this.pos === -8) {
      this.winOriginal = true;
      this.winOne = false;
      this.winTwo = true;
    } else if (this.pos === 8) {
      this.winOriginal = true;
      this.winOne = true;
      this.winTwo = false;
    }
  }

  // Set GIF image
  this.posImage = this.getImagePath(this.pos, variant, extension);
   if(this.posImage === 'img/clawpos-8-gif.gif') {
        this.winOriginal = true;
        this.winOne = false;
        this.winTwo = true;
        this.winMessage = "WIN!!";
    }
    else if(this.posImage === 'img/clawpos8-gif.gif') {
        this.winOriginal = true;
        this.winOne = true;
        this.winTwo = false;
        this.winMessage = "WIN!!";
    }
    else if(this.posImage === 'img/1-clawpos-8-gif.gif') {
        this.winTwo = true;
        this.winMessage = "WIN!!";
    }
    else if(this.posImage === 'img/2-clawpos8-gif.gif') {
        this.winOne = true;
        this.winMessage = "WIN!!";
    }
    else {
        this.winMessage = "Oh no! Try again.";
    }
  }

  getImagePath(pos: number, variant: string = "", extension: string = ".png"): string {
  const prefix = pos < 0 ? `clawpos${pos}` : `clawpos${pos}`;
  return `img/${variant}${prefix}${extension}`;
}

}
