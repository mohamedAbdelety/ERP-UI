import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { ToastrService } from 'ngx-toastr';
import { Tag, TagService } from '../tag.service';

@Component({
  selector: 'tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
})
export class TagsComponent implements OnInit {

  public columnMode: typeof ColumnMode = ColumnMode;
  tags: Tag[];

  constructor(
    public tagService: TagService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getTags();
  }

  getTags() {
    this.tagService.getAll().subscribe(
      (res: any) => {
        this.tags = res;
      });
  }

  createNewTag() {
    this.router.navigate(['/app/tags/create']);
  }

  delete(id: number) {
    this.tagService.delete(id).subscribe(
      (res: any) => {
        this.toastrService.success('تم الحذف بنجاح', 'الحذف');
        const index = this.tags.findIndex(f => f.id === res.id);
        this.tags.splice(index, 1);
        this.tags = [...this.tags];
      });
  }
}
