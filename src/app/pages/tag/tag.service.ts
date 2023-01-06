import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TagService {
  constructor(
    private http: HttpClient
  ) {
  }

  create(model: any): Observable<any> {
    return this.http.post<Tag>(`${environment.serverUrl}tags`, model);
  }

  edit(id: number, model: any): Observable<any> {
    return this.http.put<Tag>(`${environment.serverUrl}tags/${id}`, model);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<Tag>(`${environment.serverUrl}tags/${id}`);
  }

  get(id: number): Observable<Tag> {
    return this.http.get<Tag>(`${environment.serverUrl}tags/${id}`);
  }

  getAll(): Observable<Tag> {
    return this.http.get<Tag>(`${environment.serverUrl}tags`);
  }

}

export interface Tag {
  id: number;
  path: string;
  title: string;
  description: string;
  notes: string;
  type: string;
  kindId: number;
  kindName: string;
  opcId: number;
  opcTitle: string;
  opcName: string;
}

