import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-chaptereleven-parta',
  imports: [MatIconModule, CommonModule, FormsModule],
  templateUrl: './chaptereleven-parta.html',
  styleUrl: './chaptereleven-parta.scss'
})
export class ChapterelevenParta {
  constructor(private router: Router) {}
  pos = { x: 180, y: 400 };
  readonly step = 20;
  readonly boxSize = 400;
  readonly charSize = 40;
  rockCount = 0;
  score = 0;
  winMessage = "";
  readonly leftLeftPos = 0;
  readonly leftMiddlePos = 140;
  readonly rightMiddlePos = 260;
  readonly rightRightPos = 310;
characterImage = 'img/8bitfriendOG.png';
emilyImage = 'img/emilycheer.png';

  nameInput = ""; // Default value
  nameArray: string[] = [];
  answerArray: string[] = [
    "christian"
    ,"kasey"
    ,"emily"
    ,"alan"
    ,"rachel"
    ,"melissa"
    ,"hoa"
    ,"janie"
    ,"kim"
    ,"teddy"
    ,"thien" //won't accept charlie lol
    ,"roan"
    ,"aaron"
    ,"taliz"
    ,"mohammad"
    ,"syed"
    ,"jacob"
    ,"fariha"
    ,"alice"
    ,"brandon"];
  

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log('Key pressed:', event.key);
    if(event.key == "Enter" && this.winMessage == "WIN!!") {
      this.router.navigate(['chaptertwelve/parta']);
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
    console.log(value);
    if(this.answerArray.includes(value.toLowerCase()) && !this.nameArray.includes(value))
    {
      //the date we first met
      this.nameArray.push(value.toLowerCase());
      this.nameInput = ''; //clear input field
      //this.winMessage = "WIN!!";
    }
    if(this.nameArray.length == 20) //complete
    {
      this.winMessage = "WIN!!";
    }
  }

}
