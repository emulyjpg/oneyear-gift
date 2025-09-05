import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptertenParta } from './chapterten-parta';

describe('ChaptertenParta', () => {
  let component: ChaptertenParta;
  let fixture: ComponentFixture<ChaptertenParta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaptertenParta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaptertenParta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
