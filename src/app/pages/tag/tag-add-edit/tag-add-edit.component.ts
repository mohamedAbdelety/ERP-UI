import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { TagService } from '../tag.service';
import { ToastrService } from 'ngx-toastr';
import { Kind, KindService } from '../../kind/kind.service';
import { Opc, OpcService } from '../../opc/opc.service';

@Component({
  selector: 'tag-add-edit',
  templateUrl: './tag-add-edit.component.html',
  styleUrls: ['./tag-add-edit.component.scss'],
})
export class TagAddEditComponent implements OnInit {

  formSubmitted: boolean;
  form: FormGroup;
  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;
  kinds: Kind[];
  opcs: Opc[];

  constructor(
    public tagService: TagService,
    public kindService: KindService,
    public opcService: OpcService,
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
      path: ['', Validators.required],
      title: ['', Validators.required],
      kindId: [, Validators.required],
      opcId: [, Validators.required],
      description: [''],
      notes: [''],
      type: ['Decimal', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.getId() !== -1) {
      this.getTag(this.getId());
    }
    this.getKinds();
    this.getOpcs();
  }

  getTag(id: number) {
    this.tagService.get(id).subscribe(
      (res: any) => {
        this.form.patchValue(res);
      });
  }

  getKinds() {
    this.kindService.getAll().subscribe(
      (res: any) => {
        this.kinds = res;
      });
  }

  getOpcs() {
    this.opcService.getAll().subscribe(
      (res: any) => {
        this.opcs = res;
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
    this.router.navigate(['/app/tags']);
  }

  save() {
    this.formSubmitted = true;
    if (this.form.valid) {
      this.tagService.create(this.form.value).subscribe(
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
      this.tagService.edit(this.getId(), this.form.value).subscribe(
        (res: any) => {
          this.toastrService.success('تم التعديل بنجاح', 'التعديل');
          this.router.navigate(['/app/tags']);
        });
    }
  }

}
