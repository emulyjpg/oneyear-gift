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
  showChapters = false;
  activeYear = 'first-year';
  selectedYearLabel = 'Our 1st Year';
  chapters = [
    { path: 'chapterone', label: 'Chapter 1' },
    // { path: 'chapterone/partb', label: 'Chapter One Part B' },
    // { path: 'chapterone/partc', label: 'Chapter One Part C' },
    { path: 'chaptertwo', label: 'Chapter 2' },
    { path: 'chapterthree/parta', label: 'Chapter 3' },
    // { path: 'chapterthree/partb', label: 'Chapter Three Part B' },
    // { path: 'chapterthree/partc', label: 'Chapter Three Part C' },
    { path: 'chapterfour/parta', label: 'Chapter 4' },
    { path: 'chapterfive/parta', label: 'Chapter 5' },
    { path: 'chaptersix/parta', label: 'Chapter 6' },
    { path: 'chapterseven/parta', label: 'Chapter 7' },
    { path: 'chaptereight/parta', label: 'Chapter 8' },
    { path: 'chapternine/parta', label: 'Chapter 9' },
    { path: 'chapterten/parta', label: 'Chapter 10' },
    { path: 'chaptereleven/parta', label: 'Chapter 11' },
    { path: 'chaptertwelve/parta', label: 'Chapter 12' },
    { path: 'chapterthirteen/parta', label: 'Chapter 13' },
    { path: 'chapterfourteen/parta', label: 'Chapter 14' },
    { path: 'chapterfifteen/parta', label: 'Chapter 15' },
    { path: 'chaptersixteen/parta', label: 'Chapter 16' },
    { path: 'chapterseventeen/parta', label: 'Chapter 17' },
    { path: 'chapterfinal/parta', label: 'Final Chapter' }
  ];

  constructor(private router: Router) {}

  goTo(route: string) {
    const targetRoute = this.activeYear ? `${this.activeYear}/${route}` : route;
    this.router.navigate([targetRoute]);
  }

  openYear(year: 'first-year' | 'second-year') {
    this.activeYear = year;
    this.selectedYearLabel = year === 'first-year' ? 'Our 1st Year' : 'Our 2nd Year';
    this.showChapters = true;
  }

  showChapterSelect() {
    this.openYear('first-year');
  }

  hideChapterSelect() {
    this.showChapters = false;
  }

}
