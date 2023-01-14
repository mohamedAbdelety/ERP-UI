import { AppConfig } from '../../app.config';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const jwt = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})

export class MainService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
  }

  getOne(model: any): Observable<any> {
    return this.http.post(environment.serverUrl + 'readings/one', model);
  }
}
