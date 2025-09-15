import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptersixteenParta } from './chaptersixteen-parta';

describe('ChaptersixteenParta', () => {
  let component: ChaptersixteenParta;
  let fixture: ComponentFixture<ChaptersixteenParta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaptersixteenParta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaptersixteenParta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
