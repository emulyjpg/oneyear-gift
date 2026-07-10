import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondYearChapterfinalParta } from './secondyear-chapterfinal-parta';

describe('ChapterfinalParta', () => {
  let component: SecondYearChapterfinalParta;
  let fixture: ComponentFixture<SecondYearChapterfinalParta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondYearChapterfinalParta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondYearChapterfinalParta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
