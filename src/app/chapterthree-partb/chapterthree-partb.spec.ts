import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterthreePartb } from './chapterthree-partb';

describe('ChapterthreePartb', () => {
  let component: ChapterthreePartb;
  let fixture: ComponentFixture<ChapterthreePartb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapterthreePartb]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterthreePartb);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
