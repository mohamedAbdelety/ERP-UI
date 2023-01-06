import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router, NavigationExtras } from '@angular/router';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { CoreService } from '../services';

@Injectable({
  providedIn: 'root'
})

export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private translate: TranslateService,
    public coreService: CoreService,
    private router: Router,
    private toastrService: ToastrService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        if (error) {
          if (error.status === 400) {
            this.toastrService.error(this.translate.instant(error.error.message), this.translate.instant('Error'), {
              messageClass: this.coreService.currentLanguage === 'ar' ? 'rtl' : 'ltr',
              titleClass: this.coreService.currentLanguage === 'ar' ? 'rtl' : 'ltr'
            });
          }
          if (error.status === 401) {
            this.toastrService.error(this.translate.instant(error.error.message), this.translate.instant('Error'), {
              messageClass: this.coreService.currentLanguage === 'ar' ? 'rtl' : 'ltr',
              titleClass: this.coreService.currentLanguage === 'ar' ? 'rtl' : 'ltr'
            });
            this.router.navigate(['/login']);
          }
          if (error.status === 404) {
            this.router.navigateByUrl('/not-found');
          }
          if (error.status === 409) {
            this.toastrService.error(this.translate.instant(error.error.message), this.translate.instant('Error'), {
              messageClass: this.coreService.currentLanguage === 'ar' ? 'rtl' : 'ltr',
              titleClass: this.coreService.currentLanguage === 'ar' ? 'rtl' : 'ltr'
            });
          }
          if (error.status === 500) {
            this.toastrService.error(this.translate.instant(error.error.message), this.translate.instant('Error'), {
              messageClass: this.coreService.currentLanguage === 'ar' ? 'rtl' : 'ltr',
              titleClass: this.coreService.currentLanguage === 'ar' ? 'rtl' : 'ltr'
            });
          }
        }
        return throwError(error);
      })
    );
  }

}
