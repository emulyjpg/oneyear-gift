import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterfourteenParta } from './chapterfourteen-parta';

describe('ChapterfourteenParta', () => {
  let component: ChapterfourteenParta;
  let fixture: ComponentFixture<ChapterfourteenParta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapterfourteenParta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterfourteenParta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
