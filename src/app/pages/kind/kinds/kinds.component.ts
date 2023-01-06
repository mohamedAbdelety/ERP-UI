import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { ToastrService } from 'ngx-toastr';
import { Kind, KindService } from '../kind.service';

@Component({
  selector: 'kinds',
  templateUrl: './kinds.component.html',
  styleUrls: ['./kinds.component.scss'],
})
export class KindsComponent implements OnInit {

  public columnMode: typeof ColumnMode = ColumnMode;
  kinds: Kind[];

  constructor(
    public kindService: KindService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getKinds();
  }

  getKinds() {
    this.kindService.getAll().subscribe(
      (res: any) => {
        this.kinds = res;
      });
  }

  createNewKind() {
    this.router.navigate(['/app/kinds/create']);
  }

  delete(id: number) {
    this.kindService.delete(id).subscribe(
      (res: any) => {
        this.toastrService.success('تم الحذف بنجاح', 'الحذف');
        const index = this.kinds.findIndex(f => f.id === res.id);
        this.kinds.splice(index, 1);
        this.kinds = [...this.kinds];
      });
  }
}
