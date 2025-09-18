import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterseventeenParta } from './chapterseventeen-parta';

describe('ChapterseventeenParta', () => {
  let component: ChapterseventeenParta;
  let fixture: ComponentFixture<ChapterseventeenParta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapterseventeenParta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterseventeenParta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
