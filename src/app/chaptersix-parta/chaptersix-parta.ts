import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chaptersix-parta',
  imports: [MatIconModule, CommonModule, FormsModule],
  standalone: true,
  templateUrl: './chaptersix-parta.html',
  styleUrl: './chaptersix-parta.scss'
})
export class ChaptersixParta {
  constructor(private router: Router) {}
  pos = { x: 180, y: 400 };
  readonly step = 20;
  readonly boxSize = 400;
  readonly charSize = 40;
  loadCount = 0;
  score = 0;
  winMessage = "Loading...";

  plateCount: number = 0; // Default value
  

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log('Key pressed:', event.key);
    if(event.key == "Enter" && this.winMessage == "WIN!!") {
      this.router.navigate(['chapterseven/parta']);
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
    this.loadCount++;
    console.log(this.loadCount);
    if(this.loadCount >= 8)
    {
      console.log("WIN!!");
      this.winMessage = "WIN!!";
    }
    else if(this.loadCount >= 6)
    {
      this.winMessage = "Almost!!";
    }
    else if(this.loadCount >= 4)
    {
      this.winMessage = "Still loading..";
    }
    else if(this.loadCount >= 2)
    {
      this.winMessage = "Loading..";
    }
  }
}
