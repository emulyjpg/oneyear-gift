import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptersixParta } from './chaptersix-parta';

describe('ChaptersixParta', () => {
  let component: ChaptersixParta;
  let fixture: ComponentFixture<ChaptersixParta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaptersixParta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaptersixParta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
