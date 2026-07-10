import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondYearChaptersixteenParta } from './secondyear-chaptersixteen-parta';

describe('ChaptersixteenParta', () => {
  let component: SecondYearChaptersixteenParta;
  let fixture: ComponentFixture<SecondYearChaptersixteenParta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondYearChaptersixteenParta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondYearChaptersixteenParta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
