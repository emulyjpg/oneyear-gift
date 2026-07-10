import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondYearChapterelevenParta } from './secondyear-chaptereleven-parta';

describe('ChapterelevenParta', () => {
  let component: SecondYearChapterelevenParta;
  let fixture: ComponentFixture<SecondYearChapterelevenParta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondYearChapterelevenParta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondYearChapterelevenParta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
