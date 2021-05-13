import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeDetailsMobileComponent } from './grade-details-mobile.component';

describe('GradeDetailsMobileComponent', () => {
  let component: GradeDetailsMobileComponent;
  let fixture: ComponentFixture<GradeDetailsMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeDetailsMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeDetailsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
