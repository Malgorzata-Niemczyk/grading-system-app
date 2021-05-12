import { Component, OnInit } from '@angular/core';
import { GRADES } from './mock-grades';
import { gradesList } from './mock-grades';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-grades-list',
  templateUrl: './grades-list.component.html',
  styleUrls: ['./grades-list.component.scss']
})
export class GradesListComponent implements OnInit {
  grades: gradesList[] = GRADES;

  constructor() { }

  ngOnInit(): void {}

  toggleAddGradeForm() {
    console.log('toggle')
  }
}
