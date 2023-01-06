import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { ToastrService } from 'ngx-toastr';
import { Opc, OpcService } from '../opc.service';

@Component({
  selector: 'opcs',
  templateUrl: './opcs.component.html',
  styleUrls: ['./opcs.component.scss'],
})
export class OpcsComponent implements OnInit {

  public columnMode: typeof ColumnMode = ColumnMode;
  opcs: Opc[];

  constructor(
    public opcService: OpcService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getOpcs();
  }

  getOpcs() {
    this.opcService.getAll().subscribe(
      (res: any) => {
        this.opcs = res;
      });
  }

  createNewOpc() {
    this.router.navigate(['/app/opcs/create']);
  }

  delete(id: number) {
    this.opcService.delete(id).subscribe(
      (res: any) => {
        this.toastrService.success('تم الحذف بنجاح', 'الحذف');
        const index = this.opcs.findIndex(f => f.id === res.id);
        this.opcs.splice(index, 1);
        this.opcs = [...this.opcs];
      });
  }
}
