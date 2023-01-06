import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { UserService } from '../user.service';
import { ToastrService } from 'ngx-toastr';
import validator from 'validator';

@Component({
  selector: 'user-add-edit',
  templateUrl: './user-add-edit.component.html',
  styleUrls: ['./user-add-edit.component.scss'],
})
export class UserAddEditComponent implements OnInit {

  formSubmitted: boolean;
  form: FormGroup;
  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(
    public userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastrService: ToastrService
  ) {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      role: ['Admin', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.getId() !== -1) {
      this.getUser(this.getId());
    }
  }

  getUser(id: number) {
    this.userService.get(id).subscribe(
      (res: any) => {
        this.form.patchValue(res);
      });
  }

  public errorHandling = (control: string, error: string) => {
    return this.form.controls[control].hasError(error);
  }

  get isNew() {
    return this.getId() === -1;
  }

  getId() {
    return parseInt(this.route.params['value'].id, 10) || -1;
  }

  goBack() {
    this.router.navigate(['/app/users']);
  }

  save() {
    this.formSubmitted = true;
    if (this.form.valid) {
      this.userService.create(this.form.value).subscribe(
        (res: any) => {
          this.toastrService.success('تم الإضافة بنجاح', 'الإضافة');
          this.resetForm();
        });
    }
  }

  resetForm() {
    this.formGroupDirective.resetForm();
    this.formSubmitted = false;
  }

  update() {
    this.formSubmitted = true;
    if (this.form.valid) {
      this.userService.edit(this.getId(), this.form.value).subscribe(
        (res: any) => {
          this.toastrService.success('تم التعديل بنجاح', 'التعديل');
          this.router.navigate(['/app/users']);
        });
    }
  }

}
