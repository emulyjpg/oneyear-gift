import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondYearChapterfourteenParta } from './secondyear-chapterfourteen-parta';

describe('ChapterfourteenParta', () => {
  let component: SecondYearChapterfourteenParta;
  let fixture: ComponentFixture<SecondYearChapterfourteenParta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondYearChapterfourteenParta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondYearChapterfourteenParta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
