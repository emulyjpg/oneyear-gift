import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondYearChaptersixParta } from './secondyear-chaptersix-parta';

describe('ChaptersixParta', () => {
  let component: SecondYearChaptersixParta;
  let fixture: ComponentFixture<SecondYearChaptersixParta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondYearChaptersixParta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondYearChaptersixParta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
