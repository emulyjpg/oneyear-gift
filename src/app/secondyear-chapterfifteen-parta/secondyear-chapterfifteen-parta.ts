import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-secondyear-chapterfifteen-parta',
  imports: [MatIconModule, CommonModule, FormsModule, DragDropModule],
  templateUrl: './secondyear-chapterfifteen-parta.html',
  styleUrl: './secondyear-chapterfifteen-parta.scss'
})
export class SecondYearChapterfifteenParta {
constructor(private router: Router) {}
 @ViewChild('dropZoneRef') dropZoneRef!: ElementRef;
toppings = [
    { name: 'Pepperoni', icon: 'img/pizza1.png' },
    { name: 'Pepperoni', icon: 'img/pizza2.png' },
    { name: 'Pepperoni', icon: 'img/pizza3.png' },
    { name: 'Mushroom', icon: 'img/pizza4.png' },
    { name: 'Mushroom', icon: 'img/pizza5.png' },
    { name: 'Mushroom', icon: 'img/pizza6.png' },
    { name: 'Onion', icon: 'img/pizza7.png' },
    { name: 'Onion', icon: 'img/pizza8.png' },
    { name: 'Onion', icon: 'img/pizza9.png' },
  ];
  winMessage = "Add toppings to the pizza!";
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
      this.router.navigate(['second-year/chapterfinal/parta']);
    }
  }
  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    if(this.charmCount < 9) {
      this.charmCount++;
    }
    console.log(this.charmCount);
    if(this.charmCount >= 9)
    {
      this.winMessage = "WIN!!"
    }  
  }
}
