import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class KindService {
  constructor(
    private http: HttpClient
  ) {
  }

  create(model: any): Observable<any> {
    return this.http.post<Kind>(`${environment.serverUrl}kinds`, model);
  }

  edit(id: number, model: any): Observable<any> {
    return this.http.put<Kind>(`${environment.serverUrl}kinds/${id}`, model);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<Kind>(`${environment.serverUrl}kinds/${id}`);
  }

  get(id: number): Observable<Kind> {
    return this.http.get<Kind>(`${environment.serverUrl}kinds/${id}`);
  }

  getAll(): Observable<Kind> {
    return this.http.get<Kind>(`${environment.serverUrl}kinds`);
  }

}

export interface Kind {
  id: number;
  name: string;
  description: string;
  notes: string;
}

