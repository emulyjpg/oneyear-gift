import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { SecondYearChaptertwo } from './secondyear-chaptertwo';

describe('Chaptertwo', () => {
  let component: SecondYearChaptertwo;
  let fixture: ComponentFixture<SecondYearChaptertwo>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondYearChaptertwo],
      providers: [{ provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondYearChaptertwo);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to chapter three when Enter is pressed after winning', () => {
    for (let i = 0; i < component.targetClicks; i++) {
      component.handleClick();
    }

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));

    expect(router.navigate).toHaveBeenCalledWith(['second-year/chapterthree/parta']);
  });
});
