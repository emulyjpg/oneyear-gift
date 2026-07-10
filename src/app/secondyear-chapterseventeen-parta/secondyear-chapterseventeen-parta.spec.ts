import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondYearChapterseventeenParta } from './secondyear-chapterseventeen-parta';

describe('ChapterseventeenParta', () => {
  let component: SecondYearChapterseventeenParta;
  let fixture: ComponentFixture<SecondYearChapterseventeenParta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondYearChapterseventeenParta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondYearChapterseventeenParta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
