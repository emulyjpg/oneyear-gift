import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterthreeParta } from './chapterthree-parta';

describe('ChapterthreeParta', () => {
  let component: ChapterthreeParta;
  let fixture: ComponentFixture<ChapterthreeParta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapterthreeParta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterthreeParta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
