import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondYearChaptertwelveParta } from './secondyear-chaptertwelve-parta';

describe('ChaptertwelveParta', () => {
  let component: SecondYearChaptertwelveParta;
  let fixture: ComponentFixture<SecondYearChaptertwelveParta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondYearChaptertwelveParta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondYearChaptertwelveParta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
