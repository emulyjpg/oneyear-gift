import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondYearChapterthreePartc } from './secondyear-chapterthree-partc';

describe('ChapterthreePartc', () => {
  let component: SecondYearChapterthreePartc;
  let fixture: ComponentFixture<SecondYearChapterthreePartc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondYearChapterthreePartc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondYearChapterthreePartc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
