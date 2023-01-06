import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CredentialService } from '../services';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    private credentialService: CredentialService,
    private route: Router
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.credentialService.isLoggedIn() && this.credentialService.checkTokenExpire()) {
      if (next.data.roles && next.data.roles.indexOf(this.credentialService.getUser().role) === -1) {
        this.route.navigate(['/home/sales/add']);
        return false;
      }
      return true;
    }
    this.route.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

}
