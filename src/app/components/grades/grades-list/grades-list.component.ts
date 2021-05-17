import { Component, OnInit } from '@angular/core';
import { GradesService } from '../../../services/grades.service';
import { gradesList } from './mock-grades';
import { UiService } from '../../../services/ui.service';
import { Subscription } from 'rxjs';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-grades-list',
  templateUrl: './grades-list.component.html',
  styleUrls: ['./grades-list.component.scss']
})
export class GradesListComponent implements OnInit {
  grades: gradesList[] = [];
  showAddGradeForm: boolean;
  subscription: Subscription;
  faEdit = faEdit;

  constructor(private gradesService: GradesService, private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddGradeForm = value);
  }

  ngOnInit(): void {
    this.gradesService.fetchGradesList().subscribe(grades => this.grades = grades.sort((a, b) => (a.minPercentage > b.minPercentage) ? 1 : (b.minPercentage > a.minPercentage) ? -1 : 0));
  }

  deleteGrade(grade: gradesList) {
    this.gradesService.deleteGrade(grade).subscribe(() => this.grades.filter((g) => g.id !== grade.id));
  }

  addGrade(grade: gradesList) {
    this.gradesService.addGrade(grade).subscribe(grade => [...this.grades, grade]);
  }

  toggleAddGradeForm() {
    this.uiService.toggleAddGradeForm();
  }
}
