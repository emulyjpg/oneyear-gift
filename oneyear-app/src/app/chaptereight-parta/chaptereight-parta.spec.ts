import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaptereightParta } from './chaptereight-parta';

describe('ChaptereightParta', () => {
  let component: ChaptereightParta;
  let fixture: ComponentFixture<ChaptereightParta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaptereightParta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChaptereightParta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
