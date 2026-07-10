import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondYearChaptertenParta } from './secondyear-chapterten-parta';

describe('ChaptertenParta', () => {
  let component: SecondYearChaptertenParta;
  let fixture: ComponentFixture<SecondYearChaptertenParta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondYearChaptertenParta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondYearChaptertenParta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
