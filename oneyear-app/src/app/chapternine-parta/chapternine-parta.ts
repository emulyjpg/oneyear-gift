import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-chapternine-parta',
  imports: [MatIconModule, CommonModule, FormsModule, DragDropModule],
  templateUrl: './chapternine-parta.html',
  styleUrl: './chapternine-parta.scss'
})
export class ChapternineParta {
constructor(private router: Router) {}
 @ViewChild('dropZoneRef') dropZoneRef!: ElementRef;
toppings = [
    { name: 'Calcifer', icon: 'img/charm1.png' },
    { name: 'Kodama', icon: 'img/charm2.png' },
    { name: 'No Face', icon: 'img/charm3.png' },
    { name: 'Princess Mononoke', icon: 'img/charm4.png' },
    { name: 'Gigi', icon: 'img/charm5.png' },
    { name: 'Kiki', icon: 'img/charm6.png' },
    { name: 'Catbus', icon: 'img/charm7.png' },
    { name: 'Soot Sprite', icon: 'img/charm8.png' },
    { name: 'Totoro', icon: 'img/charm9.png' },
    { name: 'Chutotoro', icon: 'img/charm10.png' },
  ];
  winMessage = "Decorate the crocs!";
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
      this.router.navigate(['chapterten/parta']);
    }
  }
  @HostListener('document:mouseup', ['$event'])
  onMouseUp(event: MouseEvent) {
    if(this.charmCount < 10) {
      this.charmCount++;
    }
    console.log(this.charmCount);
    if(this.charmCount >= 10)
    {
      this.winMessage = "WIN!!"
    }  
  }

}
