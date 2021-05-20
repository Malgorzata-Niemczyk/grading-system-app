import { Component, OnInit, Input } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { gradesList } from '../grades-list/mock-grades';

@Component({
  selector: 'app-selected-grade-details',
  templateUrl: './selected-grade-details.component.html',
  styleUrls: ['./selected-grade-details.component.scss']
})

export class SelectedGradeDetailsComponent implements OnInit {
  faEdit = faEdit;
  @Input() grade: gradesList;

  constructor() { }

  ngOnInit(): void {
  }

}
