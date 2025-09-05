import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chapterfive-parta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chapterfive-parta.html',
  styleUrl: './chapterfive-parta.scss'
})
export class ChapterfiveParta {
  constructor(private router: Router) {}
  maze = [
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
    ['#', ' ', ' ', ' ', '#', ' ', ' ', ' ', ' ', '#'],
    ['#', ' ', '#', ' ', '#', ' ', '#', '#', ' ', '#'],
    ['#', ' ', '#', ' ', ' ', ' ', ' ', '#', ' ', '#'],
    ['#', ' ', '#', '#', '#', '#', ' ', '#', ' ', '#'],
    ['#', ' ', ' ', ' ', ' ', '#', ' ', ' ', ' ', '#'],
    ['#', '#', '#', '#', ' ', '#', '#', '#', ' ', '#'],
    ['#', ' ', ' ', '#', ' ', ' ', ' ', '#', ' ', '#'],
    ['#', ' ', '#', '#', '#', '#', ' ', '#', 'G', '#'],
    ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
  ];
  player = { x: 1, y: 1 };
  winMessage = '';

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (this.winMessage) return;
    let dx = 0, dy = 0;
    if (event.key === 'ArrowUp') dy = -1;
    else if (event.key === 'ArrowDown') dy = 1;
    else if (event.key === 'ArrowLeft') dx = -1;
    else if (event.key === 'ArrowRight') dx = 1;
    else if(event.key == "Enter" && this.winMessage == "WIN!!")
    {
      this.router.navigate(['chapterfive/parta']);
    }
    else return;
    const nx = this.player.x + dx;
    const ny = this.player.y + dy;
    if (this.maze[ny][nx] !== '#') {
      this.player.x = nx;
      this.player.y = ny;
      if (this.maze[ny][nx] === 'G') {
        this.winMessage = 'WIN!!';
      }
    }
  }

  reset() {
    this.player = { x: 1, y: 1 };
    this.winMessage = '';
  }
}
