import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptertwelveParta } from './chaptertwelve-parta';

describe('ChaptertwelveParta', () => {
  let component: ChaptertwelveParta;
  let fixture: ComponentFixture<ChaptertwelveParta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaptertwelveParta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaptertwelveParta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
