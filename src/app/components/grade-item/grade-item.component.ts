import { Component, OnInit, Input } from '@angular/core';
import { gradesList } from '../grades-list/mock-grades';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-grade-item',
  templateUrl: './grade-item.component.html',
  styleUrls: ['./grade-item.component.scss']
})
export class GradeItemComponent implements OnInit {
  @Input() grade: gradesList;
  faTrashAlt = faTrashAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
