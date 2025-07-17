import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chapterzero } from './chapterzero';

describe('Chapterzero', () => {
  let component: Chapterzero;
  let fixture: ComponentFixture<Chapterzero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chapterzero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chapterzero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
