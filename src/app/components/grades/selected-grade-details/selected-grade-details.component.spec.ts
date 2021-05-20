import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedGradeDetailsComponent } from './selected-grade-details.component';

describe('SelectedGradeDetailsComponent', () => {
  let component: SelectedGradeDetailsComponent;
  let fixture: ComponentFixture<SelectedGradeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedGradeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedGradeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
