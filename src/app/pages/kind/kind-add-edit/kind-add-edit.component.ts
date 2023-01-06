import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { KindService } from '../kind.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'kind-add-edit',
  templateUrl: './kind-add-edit.component.html',
  styleUrls: ['./kind-add-edit.component.scss'],
})
export class KindAddEditComponent implements OnInit {

  // isNew: boolean = true;
  formSubmitted: boolean;
  form: FormGroup;
  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(
    public kindService: KindService,
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
      description: [''],
      notes: ['']
    });
  }

  ngOnInit(): void {
    if (this.getId() !== -1) {
      this.getKind(this.getId());
    }
  }

  getKind(id: number) {
    this.kindService.get(id).subscribe(
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
    this.router.navigate(['/app/kinds']);
  }

  save() {
    this.formSubmitted = true;
    if (this.form.valid) {
      this.kindService.create(this.form.value).subscribe(
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
      this.kindService.edit(this.getId(), this.form.value).subscribe(
        (res: any) => {
          this.toastrService.success('تم التعديل بنجاح', 'التعديل');
          this.router.navigate(['/app/kinds']);
        });
    }
  }

}
