import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { pixelGrid, PixelGrid } from '../../assets/painting-grid/pixel-grid';

@Component({
  selector: 'app-chapterthree-partb',
  imports: [CommonModule],
  templateUrl: './chapterthree-partb.html',
  styleUrl: './chapterthree-partb.scss'
})
export class ChapterthreePartb {
  constructor(private router: Router) {}
  pixelGrid: PixelGrid = pixelGrid;
  palette: string[] = [
    '#87CEEB',
    '#FFFFFF',
    '#A9A9A9',
    '#FFD700',
    '#228B22',
    '#007FCE'
  ];

  selectedColor: string = this.palette[0];
  winMessage = "Let's paint!";


colorPixel(x: number, y: number) {
  const pixel = this.pixelGrid[y][x];
  const correctColor = pixel.color;

  // Only allow fill if the selected color matches the correct color
  if (this.selectedColor === correctColor && !pixel.isColored) {
    console.log('Nice!');
    this.floodFill(x, y, correctColor);
  } else {
    console.warn('Incorrect color or already filled.');
  }
}


floodFill(x: number, y: number, targetColor: string) {
  const queue: [number, number][] = [[x, y]];

  while (queue.length > 0) {
    const [cx, cy] = queue.shift()!;
    const pixel = this.pixelGrid[cy]?.[cx];

    // Skip if out of bounds, already colored, or not matching target
    if (!pixel || pixel.isColored || pixel.color !== targetColor) continue;

    pixel.isColored = true;

    queue.push([cx + 1, cy]);
    queue.push([cx - 1, cy]);
    queue.push([cx, cy + 1]);
    queue.push([cx, cy - 1]);
  }

  if (this.checkWinCondition()) {
    this.winMessage = "WIN!!";
  }
}

checkWinCondition(): boolean {
  return this.pixelGrid.every(row => row.every(pixel => pixel.isColored));  
}

@HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log('Key pressed:', event.key);
     if(event.key == "Enter" && this.winMessage == "WIN!!") {
      //this.router.navigate(['chapterthree/partc']);
    }
  }



}
