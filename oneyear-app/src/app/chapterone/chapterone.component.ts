import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-chapterone',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './chapterone.component.html',
  styleUrls: ['./chapterone.component.scss']
})
export class ChapterOne {
  pos = { x: 180, y: 180 };
  readonly step = 20;
  readonly boxSize = 400;
  readonly charSize = 40;

  move(dx: number, dy: number) {
    this.pos.x = Math.max(0, Math.min(this.boxSize - this.charSize, this.pos.x + dx));
    this.pos.y = Math.max(0, Math.min(this.boxSize - this.charSize, this.pos.y + dy));
  }
}
