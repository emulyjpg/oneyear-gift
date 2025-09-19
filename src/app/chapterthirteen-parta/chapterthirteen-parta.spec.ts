import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterthirteenParta } from './chapterthirteen-parta';

describe('ChapterthirteenParta', () => {
  let component: ChapterthirteenParta;
  let fixture: ComponentFixture<ChapterthirteenParta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapterthirteenParta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterthirteenParta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
