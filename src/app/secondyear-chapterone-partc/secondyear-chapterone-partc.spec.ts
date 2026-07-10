import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondYearChapteronePartc } from './secondyear-chapterone-partc';

describe('ChapteronePartc', () => {
  let component: SecondYearChapteronePartc;
  let fixture: ComponentFixture<SecondYearChapteronePartc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondYearChapteronePartc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondYearChapteronePartc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
