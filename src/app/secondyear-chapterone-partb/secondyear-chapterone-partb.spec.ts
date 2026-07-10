import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondYearChapteronePartb } from './secondyear-chapterone-partb';

describe('ChapteronePartb', () => {
  let component: SecondYearChapteronePartb;
  let fixture: ComponentFixture<SecondYearChapteronePartb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondYearChapteronePartb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondYearChapteronePartb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
