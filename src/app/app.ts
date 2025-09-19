

import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatIconModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  private pressedKeys = new Set<string>();
  private animationFrameId: number | null = null;
  pos = { x: 180, y: 180 };
  readonly step = 1;
  readonly boxSize = 400;
  readonly charSize = 40;

  move(dx: number, dy: number) {
    this.pos.x = Math.max(0, Math.min(this.boxSize - this.charSize, this.pos.x + dx));
    this.pos.y = Math.max(0, Math.min(this.boxSize - this.charSize, this.pos.y + dy));
  }

  constructor() {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      window.localStorage.setItem('emoji-pos', JSON.stringify(this.pos));
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    this.pressedKeys.add(e.key);
    // Move immediately for instant response
    this.moveByPressedKeys();
    if (!this.animationFrameId) {
      this.animateMove();
    }
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(e: KeyboardEvent) {
    this.pressedKeys.delete(e.key);
    if (this.pressedKeys.size === 0 && this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  private moveByPressedKeys() {
    let dx = 0, dy = 0;
    if (this.pressedKeys.has('ArrowUp') || this.pressedKeys.has('w') || this.pressedKeys.has('W')) {
      dy -= this.step;
    }
    if (this.pressedKeys.has('ArrowDown') || this.pressedKeys.has('s') || this.pressedKeys.has('S')) {
      dy += this.step;
    }
    if (this.pressedKeys.has('ArrowLeft') || this.pressedKeys.has('a') || this.pressedKeys.has('A')) {
      dx -= this.step;
    }
    if (this.pressedKeys.has('ArrowRight') || this.pressedKeys.has('d') || this.pressedKeys.has('D')) {
      dx += this.step;
    }
    if (dx !== 0 || dy !== 0) {
      this.move(dx, dy);
    }
  }

  private animateMove() {
    this.moveByPressedKeys();
    this.animationFrameId = requestAnimationFrame(() => this.animateMove());
  }
  // Add your move method if needed
}
