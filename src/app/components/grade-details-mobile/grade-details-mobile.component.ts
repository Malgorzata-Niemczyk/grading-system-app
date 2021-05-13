import { Component, OnInit, Input } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { gradesList } from '../../components/grades-list/mock-grades';

@Component({
  selector: 'app-grade-details-mobile',
  templateUrl: './grade-details-mobile.component.html',
  styleUrls: ['./grade-details-mobile.component.scss']
})
export class GradeDetailsMobileComponent implements OnInit {
  faEdit = faEdit;
  @Input() grade: gradesList;

  constructor() { }

  ngOnInit(): void {
  }

}
