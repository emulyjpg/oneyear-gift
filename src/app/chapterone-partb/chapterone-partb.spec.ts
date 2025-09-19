import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapteronePartb } from './chapterone-partb';

describe('ChapteronePartb', () => {
  let component: ChapteronePartb;
  let fixture: ComponentFixture<ChapteronePartb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapteronePartb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapteronePartb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
