import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { gradesList } from '../../app/components/grades-list/mock-grades';

@Injectable({
  providedIn: 'root'
})
export class GradesService {
  private apiURL = 'http://localhost:5000/grades';

  constructor(private http: HttpClient) { }

  fetchGradesList(): Observable<gradesList[]> {
    return this.http.get<gradesList[]>(this.apiURL)
  }
}
