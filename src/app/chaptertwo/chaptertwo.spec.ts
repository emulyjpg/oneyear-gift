import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chaptertwo } from './chaptertwo';

describe('Chaptertwo', () => {
  let component: Chaptertwo;
  let fixture: ComponentFixture<Chaptertwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chaptertwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chaptertwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
