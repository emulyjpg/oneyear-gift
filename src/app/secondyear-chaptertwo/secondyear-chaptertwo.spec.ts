import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondYearChaptertwo } from './secondyear-chaptertwo';

describe('Chaptertwo', () => {
  let component: SecondYearChaptertwo;
  let fixture: ComponentFixture<SecondYearChaptertwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondYearChaptertwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondYearChaptertwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
