import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondYearChapterthree } from './secondyear-chapterthree';

describe('Chapterthree', () => {
  let component: SecondYearChapterthree;
  let fixture: ComponentFixture<SecondYearChapterthree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondYearChapterthree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondYearChapterthree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
