import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterfifteenParta } from './chapterfifteen-parta';

describe('ChapterfifteenParta', () => {
  let component: ChapterfifteenParta;
  let fixture: ComponentFixture<ChapterfifteenParta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapterfifteenParta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterfifteenParta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
