import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(
    private http: HttpClient
  ) {
  }

  create(model: any): Observable<any> {
    return this.http.post<User>(`${environment.serverUrl}users`, model);
  }

  edit(id: number, model: any): Observable<any> {
    return this.http.put<User>(`${environment.serverUrl}users/${id}`, model);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<User>(`${environment.serverUrl}users/${id}`);
  }

  get(id: number): Observable<User> {
    return this.http.get<User>(`${environment.serverUrl}users/${id}`);
  }

  getAll(): Observable<User> {
    return this.http.get<User>(`${environment.serverUrl}users`);
  }

}

export interface User {
  id: number;
  name: string;
  description: string;
  notes: string;
}

