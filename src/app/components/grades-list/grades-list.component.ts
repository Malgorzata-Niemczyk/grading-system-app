import { Component, OnInit } from '@angular/core';
import { GradesService } from '../../services/grades.service';
import { gradesList } from './mock-grades';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-grades-list',
  templateUrl: './grades-list.component.html',
  styleUrls: ['./grades-list.component.scss']
})
export class GradesListComponent implements OnInit {
  grades: gradesList[] = [];

  constructor(private gradesService: GradesService) { }

  ngOnInit(): void {
    this.gradesService.fetchGradesList().subscribe(grades => this.grades = grades);
  }

  deleteGrade(grade: gradesList) {
    this.gradesService.deleteGrade(grade).subscribe(() => this.grades.filter((g) => g.id !== grade.id));
  }

  addGrade(grade: gradesList) {
    this.gradesService.addGrade(grade).subscribe(grade => [...this.grades, grade]);
  }

  toggleAddGradeForm() {
    console.log('toggle')
  }
}
