import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterfourParta } from './chapterfour-parta';

describe('ChapterfourParta', () => {
  let component: ChapterfourParta;
  let fixture: ComponentFixture<ChapterfourParta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapterfourParta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterfourParta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
