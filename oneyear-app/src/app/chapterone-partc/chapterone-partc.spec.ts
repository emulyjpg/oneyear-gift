import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapteronePartc } from './chapterone-partc';

describe('ChapteronePartc', () => {
  let component: ChapteronePartc;
  let fixture: ComponentFixture<ChapteronePartc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapteronePartc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapteronePartc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
