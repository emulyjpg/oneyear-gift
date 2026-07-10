import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondYearChapterthreePartb } from './secondyear-chapterthree-partb';

describe('ChapterthreePartb', () => {
  let component: SecondYearChapterthreePartb;
  let fixture: ComponentFixture<SecondYearChapterthreePartb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondYearChapterthreePartb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondYearChapterthreePartb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
