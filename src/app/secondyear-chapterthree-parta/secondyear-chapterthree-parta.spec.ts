import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondYearChapterthreeParta } from './secondyear-chapterthree-parta';

describe('ChapterthreeParta', () => {
  let component: SecondYearChapterthreeParta;
  let fixture: ComponentFixture<SecondYearChapterthreeParta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondYearChapterthreeParta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondYearChapterthreeParta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
