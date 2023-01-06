import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";
import { ConstEnum } from './enums/const.enum';
import { RoleEnum } from './enums/role.enum';

@Injectable({
  providedIn: 'root'
})

export class CredentialService {

  constructor(
    private router: Router
  ) {
  }

  getToken() {
    return localStorage.getItem(ConstEnum.token);
  }

  getUser(): any {
    const user = jwt_decode(this.getToken());
    return user;
  }

  isLoggedIn() {
    if (this.getToken()) {
      return true;
    } else {
      return false;
    }
  }

  isAdmin() {
    const token = this.getUser();
    if (token.role === RoleEnum.Admin) {
      return true;
    } else {
      return false;
    }
  }

  checkTokenExpire() {
    if (Date.now() >= this.getUser().exp * 1000) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    localStorage.removeItem(ConstEnum.token);
    this.router.navigate(['/login']);
  }

}
