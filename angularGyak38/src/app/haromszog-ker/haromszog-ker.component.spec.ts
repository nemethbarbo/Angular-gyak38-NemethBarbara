import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaromszogKerComponent } from './haromszog-ker.component';

describe('HaromszogKerComponent', () => {
  let component: HaromszogKerComponent;
  let fixture: ComponentFixture<HaromszogKerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HaromszogKerComponent]
    });
    fixture = TestBed.createComponent(HaromszogKerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
