
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChapterOne } from './chapterone/chapterone.component';
import { Chaptertwo } from './chaptertwo/chaptertwo';
import { ChapteronePartb } from './chapterone-partb/chapterone-partb';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'chapterone', component: ChapterOne },
  { path: 'chapterone/partb', component: ChapteronePartb },
  { path: 'chaptertwo', component: Chaptertwo }, // Placeholder, replace with actual component
  { path: 'option3', component: HomeComponent }  // Placeholder, replace with actual component
];
