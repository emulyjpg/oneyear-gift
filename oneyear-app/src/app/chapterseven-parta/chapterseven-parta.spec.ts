import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptersevenParta } from './chapterseven-parta';

describe('ChaptersevenParta', () => {
  let component: ChaptersevenParta;
  let fixture: ComponentFixture<ChaptersevenParta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaptersevenParta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaptersevenParta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
