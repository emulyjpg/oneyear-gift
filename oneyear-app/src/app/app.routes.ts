
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChapterOne } from './chapterone/chapterone.component';
import { Chaptertwo } from './chaptertwo/chaptertwo';
import { ChapteronePartb } from './chapterone-partb/chapterone-partb';
import { ChapteronePartc } from './chapterone-partc/chapterone-partc';
import { ChapterthreeParta } from './chapterthree-parta/chapterthree-parta';
import { ChapterthreePartb } from './chapterthree-partb/chapterthree-partb';

export const routes: Routes = [
  { path: '', component: HomeComponent }
  ,{ path: 'home', component: HomeComponent }
  ,{ path: 'chapterone', component: ChapterOne }
  ,{ path: 'chapterone/partb', component: ChapteronePartb }
  ,{ path: 'chapterone/partc', component: ChapteronePartc }
  ,{ path: 'chaptertwo', component: Chaptertwo }
  ,{ path: 'chapterthree/parta', component: ChapterthreeParta }
  ,{ path: 'chapterthree/partb', component: ChapterthreePartb }
  // Add more routes as needed
];
