import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondYearChapterfourParta } from './secondyear-chapterfour-parta';

describe('ChapterfourParta', () => {
  let component: SecondYearChapterfourParta;
  let fixture: ComponentFixture<SecondYearChapterfourParta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondYearChapterfourParta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondYearChapterfourParta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
