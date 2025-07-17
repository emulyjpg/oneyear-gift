import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chapterone',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './chapterone.component.html',
  styleUrls: ['./chapterone.component.scss']
})
export class ChapterOne {
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

  move(direction?: any) {
    console.log(direction);
    switch (direction) {
    case "left":
        this.characterImage = 'img/8bitclimbleft.png';
        
        switch(this.rockCount) {
            case 0:
                this.pos.x = 140;
                this.pos.y = 365;
                this.score += 100;
                this.emilyImage = 'img/emilyshock.png';
                this.rockCount++;
                break;
            case 3:
                //pass
                this.pos.x = 280;
                this.pos.y = 280;
                this.score += 100;
                this.emilyImage = 'img/emilycheer.png';
                this.rockCount++;
                break;
            case 4:
                //pass
                this.pos.x = 150;
                this.pos.y = 250;
                this.score += 100;
                this.emilyImage = 'img/emilyshock.png';
                this.rockCount++;
                break;
            case 6:
                //pass
                this.pos.x = 130;
                this.pos.y = 200;
                this.score += 100;
                this.emilyImage = 'img/emilycheer.png';
                this.rockCount++;
                break;
            case 7:
                //pass
                this.pos.x = 40;
                this.pos.y = 170;
                this.score += 100;
                this.emilyImage = 'img/emilyshock.png';
                this.rockCount++;
                break;
            case 11:
                //WIN!!
                this.pos.x = 270;
                this.pos.y = 40;
                this.score += 100;
                this.winMessage = "WIN!!";
                this.emilyImage = 'img/emilywin.png';
                //this.characterImage = 'img/8bitfriendOG.png';
                break;
            default:
                //fail
                //this.pos.x = 180;
                this.pos.y = 400;
                this.characterImage = 'img/8bitflop.png';
                this.emilyImage = 'img/emilycry.png';
                this.score = 0;
                this.rockCount = 0;
                this.winMessage = "Oh no! You fell!";
        }
        break;

    case "right":
        this.characterImage = 'img/8bitclimbright.png';
        this.emilyImage = 'img/emilycheer.png';
        switch(this.rockCount) {
            case 1:
                this.pos.x = 220;
                this.pos.y = 355;
                this.score += 100;
                this.emilyImage = 'img/emilycheer.png';
                this.rockCount++;
                break;
            case 2:
                //pass
                this.pos.x = 310;
                this.pos.y = 300;
                this.score += 100;
                this.emilyImage = 'img/emilyshock.png';
                this.rockCount++;
                break;
            case 5:
                //pass
                this.pos.x = 230;
                this.pos.y = 230;
                this.score += 100;
                this.emilyImage = 'img/emilycheer.png';
                this.rockCount++;
                break;
            case 8:
                //pass
                this.pos.x = 80;
                this.pos.y = 130;
                this.score += 100;
                this.emilyImage = 'img/emilycheer.png';
                this.rockCount++;
                break;
            case 9:
                //pass
                this.pos.x = 230;
                this.pos.y = 100;
                this.score += 100;
                this.emilyImage = 'img/emilyshock.png';
                this.rockCount++;
                break;
            case 10:
                //pass
                this.pos.x = 320;
                this.pos.y = 70;
                this.score += 100;
                this.emilyImage = 'img/emilyshock.png';
                this.rockCount++;
                break;
            default:
                //fail
                //this.pos.x = 180;
                this.pos.y = 400;
                this.characterImage = 'img/8bitflop.png';
                this.emilyImage = 'img/emilycry.png';
                this.score = 0;
                this.rockCount = 0;
                this.winMessage = "Oh no! You fell!";
        }
        break;
    case "reset":
        this.pos.x = 180;
        this.pos.y = 400;
        this.characterImage = 'img/8bitfriendOG.png';
        this.emilyImage = 'img/emilycheer.png';
        this.rockCount = 0;
        this.score = 0;
        this.winMessage = "Send it!!";
        break;
    default:
        console.log(`Unhandled direction: ${direction}`);
    }



    // if(direction == "left") {
    //     console.log('Moving left');
    //     this.characterImage = 'img/8bitclimbleft.png';
    // } else if(direction == "right") {
    //     console.log('Moving right');
    //     this.characterImage = 'img/8bitclimbright.png';
    // }   else {
    //     console.log('Moving default');
    //     this.characterImage = 'img/8bitfriendOG.png';
    // }
  }
}
