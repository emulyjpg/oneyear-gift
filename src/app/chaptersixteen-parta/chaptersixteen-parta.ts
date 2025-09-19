import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chaptersixteen-parta',
  imports: [MatIconModule, CommonModule, FormsModule],
  templateUrl: './chaptersixteen-parta.html',
  styleUrl: './chaptersixteen-parta.scss'
})
export class ChaptersixteenParta {
constructor(private router: Router) {}
  pos = { x: 180, y: 400 };
  readonly step = 20;
  readonly boxSize = 400;
  readonly charSize = 40;
  rockCount = 0;
  score = 0;
  winMessage = "Dance!";
  readonly leftLeftPos = 0;
  readonly leftMiddlePos = 140;
  readonly rightMiddlePos = 260;
  readonly rightRightPos = 310;
characterImage = 'img/kpopnight.png';
emilyImage = 'img/emilycheer.png';
lyrics: string[] = ['H', 'e', ' ', 'w', 'i', 'l', 'l', ' ', 'c', 'o', 'm', 'e', ' ', 't', 'h', 'r', 'o', 'u', 'g', 'h','!'];
answer: string[] = [];

  move(direction?: any) {
    console.log(this.answer);
    switch (direction) {
    case "h":
        if(this.answer.length == 0) {
          //correct
          this.answer.push('H');
          this.characterImage = 'img/kpopdance1.png';
        }
        else if(this.answer.length == 14) {
          //correct
          this.answer.push('h');
          this.characterImage = 'img/kpopdance4.png';
        }
        else if(this.answer.length == 19) {
          //correct
          this.answer.push('h');
          this.answer.push('!');
          this.winMessage = "WIN!!";
          this.characterImage = 'img/kpopdance1.png';
        }
        else
        {
          //incorrect
          this.winMessage = "Oh no! Try again.";
          this.answer = [];
        }
        break;
    case "e":
        if(this.answer.length == 1) {
          //correct
          this.answer.push('e');
          this.answer.push(' ');
          this.characterImage = 'img/kpopdance2.png';
        }
        else if(this.answer.length == 11) {
          //correct
          this.answer.push('e');
          this.answer.push(' ');
          this.characterImage = 'img/kpopdance2.png';
        }
        else
        {
          //incorrect
          this.winMessage = "Oh no! Try again.";
          this.answer = [];
        }
      break;
    case "w":
      if(this.answer.length == 3) {
          //correct
          this.answer.push('w');
          this.characterImage = 'img/kpopdance3.png';
        }
        else
        {
          //incorrect
          this.winMessage = "Oh no! Try again.";
          this.answer = [];
        }
        break;
    case "i":
        if(this.answer.length == 4) {
          //correct
          this.answer.push('i');
          this.characterImage = 'img/kpopdance4.png';
        }
        else
        {
          //incorrect
          this.winMessage = "Oh no! Try again.";
          this.answer = [];
        }
      break;
    case "l":
      if(this.answer.length == 5) {
          //correct
          this.answer.push('l');
          this.characterImage = 'img/kpopdance1.png';
      }
      else if(this.answer.length == 6) {
          //correct
          this.answer.push('l');
          this.answer.push(' ');
          this.characterImage = 'img/kpopdance2.png';
      }
      else
        {
          //incorrect
          this.winMessage = "Oh no! Try again.";
          this.answer = [];
        }
      break;
    case "c":
        if(this.answer.length == 8) {
          //correct
          this.answer.push('c');
          this.characterImage = 'img/kpopdance3.png';
        }
        else
        {
          //incorrect
          this.winMessage = "Oh no! Try again.";
          this.answer = [];
        }
      break;
    case "o":
        if(this.answer.length == 9) {
          //correct
          this.answer.push('o');
          this.characterImage = 'img/kpopdance4.png';
        }
        else if(this.answer.length == 16) {
          //correct
          this.answer.push('o');
          this.characterImage = 'img/kpopdance2.png';
        }
        else
        {
          //incorrect
          this.winMessage = "Oh no! Try again.";
          this.answer = [];
        }
      break;
    case "m":
        if(this.answer.length == 10) {
          //correct
          this.answer.push('m');
          this.characterImage = 'img/kpopdance1.png';
        }
        else
        {
          //incorrect
          this.winMessage = "Oh no! Try again.";
          this.answer = [];
        }
      break;
    case "t":
        if(this.answer.length == 13) {
          //correct
          this.answer.push('t');
          this.characterImage = 'img/kpopdance3.png';
        }
        else
        {
          //incorrect
          this.winMessage = "Oh no! Try again.";
          this.answer = [];
        }
      break;
    case "r":
      if(this.answer.length == 15) {
          //correct
          this.answer.push('r');
          this.characterImage = 'img/kpopdance1.png';
        }
        else
        {
          //incorrect
          this.winMessage = "Oh no! Try again.";
          this.answer = [];
        }
        break;
    case "u":
      if(this.answer.length == 17) {
          //correct
          this.answer.push('u');
          this.characterImage = 'img/kpopdance3.png';
        }
        else
        {
          //incorrect
          this.winMessage = "Oh no! Try again.";
          this.answer = [];
        }
        break;
    case "g":
      if(this.answer.length == 18) {
          //correct
          this.answer.push('g');
          this.characterImage = 'img/kpopdance4.png';
        }
        else
        {
          //incorrect
          this.winMessage = "Oh no! Try again.";
          this.answer = [];
        }
        break;
    case "reset":
        this.characterImage = 'img/kpopnight.png';
        this.winMessage = "Dance!";
        break;
    default:
        this.winMessage = "Oh no! Try again.";
        this.answer = [];
        console.log(`Unhandled direction: ${direction}`);
    }
  }
  

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log('Key pressed:', event.key);
    let isLetter = event.key.length === 1 && event.key.match(/[a-z]/i);
    if(event.key == "Enter" && this.winMessage == "WIN!!") {
      this.router.navigate(['chapterseventeen/parta']);
    }
    else if(event.key == "Enter" && this.winMessage == "Oh no! Try again.") {
        this.move('reset');
    }
    else if(isLetter && this.winMessage !== "WIN!!") {
        this.move(event.key.toLowerCase());
    }
    
    // Add custom logic here based on the pressed key
    // For example, trigger a function or update a property
  }
}
