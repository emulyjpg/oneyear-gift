import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chapterthree-partc',
   imports: [MatIconModule, CommonModule, FormsModule],
  templateUrl: './chapterthree-partc.html',
  styleUrl: './chapterthree-partc.scss'
})
export class ChapterthreePartc {
constructor(private router: Router) {}
  winMessage = "\"Will you be my girlfriend?\"";
characterImage = 'img/8bitfriendOG.png';
emilyImage = 'img/emilycheer.png';

  plateCount: number = 0; // Default value
  

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log('Key pressed:', event.key);
    if(event.key == "Enter" && this.winMessage == "WIN!!") {
      this.router.navigate(['chapterfour/parta']);
    }
  }

  onPlateCountChange(event: any) {
  const value = event.target.value;
  if (value.toLowerCase() == "yes") {
    this.winMessage = "WIN!!";
  } else {
      this.winMessage = "Not quite right, try again!";
    }
  }
}
