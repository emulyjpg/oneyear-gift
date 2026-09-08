import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-secondyear-chapterten-parta',
  imports: [MatIconModule, CommonModule, FormsModule, DragDropModule],
  templateUrl: './secondyear-chapterten-parta.html',
  styleUrl: './secondyear-chapterten-parta.scss'
})
export class SecondYearChaptertenParta {
  constructor(private router: Router) {}
   @ViewChild('dropZoneRef') dropZoneRef!: ElementRef;
  toppings = [
      { name: 'Tuna Tataki', icon: 'img/machi1.png' },
      { name: 'Mango Salmon', icon: 'img/machi2.png' },
      { name: 'Beef Teriyaki', icon: 'img/machi3.png' },
      { name: 'Seared Salmon', icon: 'img/machi4.png' },
      { name: 'Seared Beef', icon: 'img/machi5.png' },
    ];
    winMessage = "Add to the table!";
    initialY = 0;
    initialX = 0;
    droppedY = 0;
    droppedX = 0;
    charmCount = 0;
  
    droppedToppings: any[] = [];
  
   
  
  onDrop(event: CdkDragDrop<any>) {
    const topping = event.item.data;
    const mouseEvent = event.event as MouseEvent;
  
    const dropZoneRect = this.dropZoneRef.nativeElement.getBoundingClientRect();
    const relativeX = mouseEvent.clientX - dropZoneRect.left;
    const relativeY = mouseEvent.clientY - dropZoneRect.top;
  
    this.droppedToppings.push({
      ...topping,
      x: relativeX,
      y: relativeY
    });
  
  
  }
  
  
  
  
    @HostListener('document:keydown', ['$event'])
    handleKeyboardEvent(event: KeyboardEvent) {
      console.log('Key pressed:', event.key);
      if(event.key == "Enter" && this.winMessage == "WIN!!") {
        this.router.navigate(['second-year/chaptereleven/parta']);
      }
    }
    @HostListener('document:mouseup', ['$event'])
    onMouseUp(event: MouseEvent) {
      if(this.charmCount < 5) {
        this.charmCount++;
      }
      console.log(this.charmCount);
      if(this.charmCount >= 5)
      {
        this.winMessage = "WIN!!"
      }  
    }

}
