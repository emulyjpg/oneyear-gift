import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterfinalParta } from './chapterfinal-parta';

describe('ChapterfinalParta', () => {
  let component: ChapterfinalParta;
  let fixture: ComponentFixture<ChapterfinalParta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapterfinalParta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterfinalParta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
