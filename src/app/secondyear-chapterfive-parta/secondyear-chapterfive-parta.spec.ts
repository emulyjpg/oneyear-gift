import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondYearChapterfiveParta } from './secondyear-chapterfive-parta';

describe('ChapterfiveParta', () => {
  let component: SecondYearChapterfiveParta;
  let fixture: ComponentFixture<SecondYearChapterfiveParta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondYearChapterfiveParta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondYearChapterfiveParta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
