import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondYearChapternineParta } from './secondyear-chapternine-parta';

describe('ChapternineParta', () => {
  let component: SecondYearChapternineParta;
  let fixture: ComponentFixture<SecondYearChapternineParta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondYearChapternineParta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondYearChapternineParta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
