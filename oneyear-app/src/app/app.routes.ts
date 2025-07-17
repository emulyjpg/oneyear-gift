
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChapterOne } from './chapterone/chapterone.component';
import { ChapterzeroComponent } from './chapterzero/chapterzero';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'chapterzero', component: ChapterzeroComponent },
  { path: 'chapterone', component: ChapterOne },
  { path: 'option2', component: HomeComponent }, // Placeholder, replace with actual component
  { path: 'option3', component: HomeComponent }  // Placeholder, replace with actual component
];
