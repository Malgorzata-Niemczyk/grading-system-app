import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddGradeForm: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddGradeForm(): void {
    this.showAddGradeForm = !this.showAddGradeForm;
    this.subject.next(this.showAddGradeForm);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
