import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class OpcService {
  constructor(
    private http: HttpClient
  ) {
  }

  create(model: any): Observable<any> {
    return this.http.post<Opc>(`${environment.serverUrl}opcs`, model);
  }

  edit(id: number, model: any): Observable<any> {
    return this.http.put<Opc>(`${environment.serverUrl}opcs/${id}`, model);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<Opc>(`${environment.serverUrl}opcs/${id}`);
  }

  get(id: number): Observable<Opc> {
    return this.http.get<Opc>(`${environment.serverUrl}opcs/${id}`);
  }

  getAll(): Observable<Opc> {
    return this.http.get<Opc>(`${environment.serverUrl}opcs`);
  }

}

export interface Opc {
  id: number;
  name: string;
  ip: string;
  title: string;
  description: string;
  notes: string;
}

