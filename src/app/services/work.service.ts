import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Work } from '../models/work.model';
const baseUrl = 'http://localhost:8080/api/works';
@Injectable({
  providedIn: 'root'
})
export class WorkService {
  constructor(private http: HttpClient) { }
  getAll(): Observable<Work[]> {
    return this.http.get<Work[]>(baseUrl);
  }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}
