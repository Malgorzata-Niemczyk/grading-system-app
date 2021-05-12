import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { gradesList } from '../../components/grades-list/mock-grades';

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

  constructor() { }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.symbolicGrade && !this.minPercentage && !this.maxPercentage) {
      alert('Please fill in all the form fields');
      return;
    }

    
    const newGrade = {
      minPercentage: this.minPercentage,
      maxPercentage: this.maxPercentage,
      symbolicGrade: this.symbolicGrade
    }
    
    this.onAddGrade.emit(newGrade);
  }
}