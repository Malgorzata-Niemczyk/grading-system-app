import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { gradesList } from '../grades/grades-list/mock-grades';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {
  @Output() onAddGrade: EventEmitter<gradesList> = new EventEmitter();

  faSave = faSave;

  // properties for the form fields
  minPercentage: number;
  maxPercentage: number;
  symbolicGrade: string;

  //properties for the form option fields
  grades: string[] = [
    'A - Excellent',
    'B - Very Good',
    'C - Good',
    'D - Satisfactory',
    'E - Poor',
    'F - Failing'
  ];

  exform = new FormGroup({
    'minPercentage': new FormControl(null, [Validators.min(0), Validators.max(100), Validators.required]),
    'maxPercentage': new FormControl(null, [Validators.min(0), Validators.max(100), Validators.required]),
    'symbolicGrade': new FormControl(null, Validators.required)
  });

  showAddGradeForm: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService
      .onToggle()
      .subscribe(value => this.showAddGradeForm = value);
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.exform.valid) {
      const data = this.exform.value;

      const newGrade = {
        minPercentage: data.minPercentage,
        maxPercentage: data.maxPercentage,
        symbolicGrade: data.symbolicGrade.charAt(0)
      }
      
      this.onAddGrade.emit(newGrade);
    }
  }
};