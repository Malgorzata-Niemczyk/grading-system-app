import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { gradesList } from '../components/grades/grades-list/mock-grades';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class GradesService {
  private apiURL = 'http://localhost:5000/grades';

  constructor(private http: HttpClient) { }

  fetchGradesList(): Observable<gradesList[]> {
    return this.http.get<gradesList[]>(this.apiURL);
  }

  fetchSelectedGrade(id: string): Observable<gradesList> {
    const gradeURL = `${this.apiURL}/${id}`;
    return this.http.get<gradesList>(gradeURL);
  }

  deleteGrade(grade: gradesList): Observable<gradesList> {
    const url = `${this.apiURL}/${grade.id}`;
    return this.http.delete<gradesList>(url);
  }

  addGrade(grade: gradesList): Observable<gradesList> {
    return this.http.post<gradesList>(this.apiURL, grade, httpOptions);
  }

  updateGradeDetails(id: string, data) {
    return this.http.put<gradesList>(`${this.apiURL}/${id}`, data)
  }
}
