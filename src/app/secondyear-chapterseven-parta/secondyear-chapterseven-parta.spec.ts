import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondYearChaptersevenParta } from './secondyear-chapterseven-parta';

describe('ChaptersevenParta', () => {
  let component: SecondYearChaptersevenParta;
  let fixture: ComponentFixture<SecondYearChaptersevenParta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondYearChaptersevenParta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondYearChaptersevenParta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
