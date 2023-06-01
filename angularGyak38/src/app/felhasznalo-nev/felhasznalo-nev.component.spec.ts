import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FelhasznaloNevComponent } from './felhasznalo-nev.component';

describe('FelhasznaloNevComponent', () => {
  let component: FelhasznaloNevComponent;
  let fixture: ComponentFixture<FelhasznaloNevComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FelhasznaloNevComponent]
    });
    fixture = TestBed.createComponent(FelhasznaloNevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
