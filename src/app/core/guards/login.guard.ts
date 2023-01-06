import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CredentialService } from '../credential.service';

@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate {

  constructor(
    private credentialService: CredentialService,
    private route: Router
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.credentialService.isLoggedIn() && this.credentialService.checkTokenExpire()) {
      this.route.navigate(['app']);
      return false;
    }
    return true;
  }
}
