import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { gradesList } from '../grades-list/mock-grades';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-grade-item',
  templateUrl: './grade-item.component.html',
  styleUrls: ['./grade-item.component.scss']
})
export class GradeItemComponent implements OnInit {
  @Input() grade: gradesList;
  @Output() onDeleteGrade: EventEmitter<gradesList> = new EventEmitter();
  faTrashAlt = faTrashAlt;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(grade, event: Event) {
    this.onDeleteGrade.emit(grade);
    event.stopPropagation();
    event.preventDefault();
  }

}
