import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondYearChapterthirteenParta } from './secondyear-chapterthirteen-parta';

describe('ChapterthirteenParta', () => {
  let component: SecondYearChapterthirteenParta;
  let fixture: ComponentFixture<SecondYearChapterthirteenParta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondYearChapterthirteenParta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondYearChapterthirteenParta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
