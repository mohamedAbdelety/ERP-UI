import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CredentialService } from '../credential.service';

@Injectable({
  providedIn: 'root'
})

export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private credentialService: CredentialService
  ) { }

  intercept(httpReq: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    let headers: any;
    if (this.credentialService.getToken()) {
      headers = httpReq.headers.set('Authorization', `bearer ${this.credentialService.getToken()}`);
    }
    const newReq = httpReq.clone({ headers });
    return next.handle(newReq);
  }
}
