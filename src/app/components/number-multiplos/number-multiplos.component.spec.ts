import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberMultiplosComponent } from './number-multiplos.component';

describe('NumberMultiplosComponent', () => {
  let component: NumberMultiplosComponent;
  let fixture: ComponentFixture<NumberMultiplosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberMultiplosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberMultiplosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
