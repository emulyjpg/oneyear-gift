import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterthreePartc } from './chapterthree-partc';

describe('ChapterthreePartc', () => {
  let component: ChapterthreePartc;
  let fixture: ComponentFixture<ChapterthreePartc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapterthreePartc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterthreePartc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
