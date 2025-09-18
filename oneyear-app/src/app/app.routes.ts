
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChapterOne } from './chapterone/chapterone.component';
import { Chaptertwo } from './chaptertwo/chaptertwo';
import { ChapteronePartb } from './chapterone-partb/chapterone-partb';
import { ChapteronePartc } from './chapterone-partc/chapterone-partc';
import { ChapterthreeParta } from './chapterthree-parta/chapterthree-parta';
import { ChapterthreePartb } from './chapterthree-partb/chapterthree-partb';
import { ChapterthreePartc } from './chapterthree-partc/chapterthree-partc';
import { ChapterfourParta } from './chapterfour-parta/chapterfour-parta';
import { ChapterfiveParta } from './chapterfive-parta/chapterfive-parta';
import { ChaptersixParta } from './chaptersix-parta/chaptersix-parta';
import { ChaptersevenParta } from './chapterseven-parta/chapterseven-parta';
import { ChaptereightParta } from './chaptereight-parta/chaptereight-parta';
import { ChapternineParta } from './chapternine-parta/chapternine-parta';
import { ChaptertenParta } from './chapterten-parta/chapterten-parta';
import { ChapterelevenParta } from './chaptereleven-parta/chaptereleven-parta';
import { ChaptertwelveParta } from './chaptertwelve-parta/chaptertwelve-parta';
import { ChapterthirteenParta } from './chapterthirteen-parta/chapterthirteen-parta';
import { ChapterfourteenParta } from './chapterfourteen-parta/chapterfourteen-parta';
import { ChapterfifteenParta } from './chapterfifteen-parta/chapterfifteen-parta';
import { ChaptersixteenParta } from './chaptersixteen-parta/chaptersixteen-parta';
import { ChapterseventeenParta } from './chapterseventeen-parta/chapterseventeen-parta';
import { ChapterfinalParta } from './chapterfinal-parta/chapterfinal-parta';

export const routes: Routes = [
  { path: '', component: HomeComponent }
  ,{ path: 'home', component: HomeComponent }
  ,{ path: 'chapterone', component: ChapterOne }
  ,{ path: 'chapterone/partb', component: ChapteronePartb }
  ,{ path: 'chapterone/partc', component: ChapteronePartc }
  ,{ path: 'chaptertwo', component: Chaptertwo }
  ,{ path: 'chapterthree/parta', component: ChapterthreeParta }
  ,{ path: 'chapterthree/partb', component: ChapterthreePartb }
  ,{ path: 'chapterthree/partc', component: ChapterthreePartc }
  ,{ path: 'chapterfour/parta', component: ChapterfourParta }
  ,{ path: 'chapterfive/parta', component: ChapterfiveParta }
  ,{ path: 'chaptersix/parta', component: ChaptersixParta }
  ,{ path: 'chapterseven/parta', component: ChaptersevenParta }
  ,{ path: 'chaptereight/parta', component: ChaptereightParta }
  ,{ path: 'chapternine/parta', component: ChapternineParta }
  ,{ path: 'chapterten/parta', component: ChaptertenParta }
  ,{ path: 'chaptereleven/parta', component: ChapterelevenParta }
  ,{ path: 'chaptertwelve/parta', component: ChaptertwelveParta }
  ,{ path: 'chapterthirteen/parta', component: ChapterthirteenParta }
  ,{ path: 'chapterfourteen/parta', component: ChapterfourteenParta } //placeholder for now
  ,{ path: 'chapterfifteen/parta', component: ChapterfifteenParta } //placeholder for now
  ,{ path: 'chaptersixteen/parta', component: ChaptersixteenParta } //placeholder for now
  ,{ path: 'chapterseventeen/parta', component: ChapterseventeenParta } //placeholder for now
  ,{ path: 'chapterfinal/parta', component: ChapterfinalParta } //placeholder for now
];
