import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondYearChaptereightParta } from './secondyear-chaptereight-parta';

describe('ChaptereightParta', () => {
  let component: SecondYearChaptereightParta;
  let fixture: ComponentFixture<SecondYearChaptereightParta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondYearChaptereightParta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondYearChaptereightParta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
