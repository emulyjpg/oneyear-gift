import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterfiveParta } from './chapterfive-parta';

describe('ChapterfiveParta', () => {
  let component: ChapterfiveParta;
  let fixture: ComponentFixture<ChapterfiveParta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapterfiveParta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterfiveParta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
