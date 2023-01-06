import { Component, HostBinding } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.template.html',
})
export class Login {

  _isFetching: boolean = false;

  @HostBinding('class') classes = 'auth-page app';

  loginForm: FormGroup;

  constructor(
    private router: Router,
    public loginService: LoginService,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  public errorHandling = (control: string, error: string) => {
    return this.loginForm.controls[control].hasError(error);
  }

  login() {
    this.loginService.login(this.loginForm.value).subscribe(
      (res: any) => {
        this.router.navigate(['/app/main/visits']);
      });
  }
}
