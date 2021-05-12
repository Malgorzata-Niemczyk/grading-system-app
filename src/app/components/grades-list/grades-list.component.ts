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
    this.gradesService.fetchGradesList().subscribe((grades) => this.grades = grades);
  }

  toggleAddGradeForm() {
    console.log('toggle')
  }
}
