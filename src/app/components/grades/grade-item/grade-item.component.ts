import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { gradesList } from '../grades-list/mock-grades';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-grade-item',
  templateUrl: './grade-item.component.html',
  styleUrls: ['./grade-item.component.scss']
})
export class GradeItemComponent implements OnInit {
  @Input() grade: gradesList;
  @Output() onDeleteGrade: EventEmitter<gradesList> = new EventEmitter();

  faTrashAlt = faTrashAlt;
  faEdit = faEdit;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(grade, event: Event) {
    event.stopPropagation();
    event.preventDefault();

    if (window.confirm("Are you sure you want to delete this item?")) {
      this.onDeleteGrade.emit(grade);
    }
  }
}
