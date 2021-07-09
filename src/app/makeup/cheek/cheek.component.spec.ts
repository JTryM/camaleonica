import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheekComponent } from './cheek.component';

describe('CheekComponent', () => {
  let component: CheekComponent;
  let fixture: ComponentFixture<CheekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
