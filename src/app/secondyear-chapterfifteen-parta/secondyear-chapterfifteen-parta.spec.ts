import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondYearChapterfifteenParta } from './secondyear-chapterfifteen-parta';

describe('ChapterfifteenParta', () => {
  let component: SecondYearChapterfifteenParta;
  let fixture: ComponentFixture<SecondYearChapterfifteenParta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondYearChapterfifteenParta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondYearChapterfifteenParta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
