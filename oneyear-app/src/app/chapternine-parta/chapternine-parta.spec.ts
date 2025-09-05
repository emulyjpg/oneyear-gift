import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapternineParta } from './chapternine-parta';

describe('ChapternineParta', () => {
  let component: ChapternineParta;
  let fixture: ComponentFixture<ChapternineParta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapternineParta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapternineParta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
