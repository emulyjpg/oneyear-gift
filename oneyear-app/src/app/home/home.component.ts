import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [MatIconModule, CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  chapters = [
    { path: 'chapterone', label: 'Chapter 1: The Day That I Met You' },
    // { path: 'chapterone/partb', label: 'Chapter One Part B' },
    // { path: 'chapterone/partc', label: 'Chapter One Part C' },
    { path: 'chaptertwo', label: 'Chapter 2: NIKI Concert' },
    { path: 'chapterthree/parta', label: 'Chapter 3: Day 1' },
    // { path: 'chapterthree/partb', label: 'Chapter Three Part B' },
    // { path: 'chapterthree/partc', label: 'Chapter Three Part C' },
    { path: 'chapterfour/parta', label: 'Chapter 4: Texans Game' },
    { path: 'chapterfive/parta', label: 'Chapter 5: Space Explorers: The Infinite' },
    { path: 'chaptersix/parta', label: 'Chapter 6: A Christmas Surprise' },
    { path: 'chapterseven/parta', label: 'Chapter 7: Crawfish Season' },
    { path: 'chaptereight/parta', label: 'Chapter 8: Valentine\'s Day "Hidden" Omakase' },
    { path: 'chapternine/parta', label: 'Chapter 9: Happy Birthday, Alan!' },
    { path: 'chapterten/parta', label: 'Chapter 10: Museum of Fine Arts' },
    { path: 'chaptereleven/parta', label: 'Chapter 11: Happy Birthday, Emily!' },
    { path: 'chaptertwelve/parta', label: 'Chapter 12: Fireworks Show for Independence Day' },
    { path: 'chapterthirteen/parta', label: 'Chapter 13: Family Dinner' },
    { path: 'chapterfourteen/parta', label: 'Chapter 14: National Girlfriend Day' },
    { path: 'chapterfifteen/parta', label: 'Chapter 15: Enhypen Concert' },
    { path: 'chaptersixteen/parta', label: 'Chapter 16: K-Pop Night' },
    { path: 'chapterseventeen/parta', label: 'Chapter 17: Chicago Architecture Boat Tour' },
    { path: 'chapterfinal/parta', label: 'Final Chapter' }
  ];

  constructor(private router: Router) {}

  goTo(route: string) {
    this.router.navigate([route]);
  }
}
