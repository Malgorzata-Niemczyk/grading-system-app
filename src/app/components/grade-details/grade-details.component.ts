import { Component, OnInit, Input } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { gradesList } from '../../components/grades-list/mock-grades';


@Component({
  selector: 'app-grade-details',
  templateUrl: './grade-details.component.html',
  styleUrls: ['./grade-details.component.scss']
})
export class GradeDetailsComponent implements OnInit {
  faEdit = faEdit;
  @Input() grade: gradesList;

  constructor() { }

  ngOnInit(): void {
  }

}
