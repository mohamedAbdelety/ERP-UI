import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { ToastrService } from 'ngx-toastr';
import { User, UserService } from '../user.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  public columnMode: typeof ColumnMode = ColumnMode;
  users: User[];

  constructor(
    public userService: UserService,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAll().subscribe(
      (res: any) => {
        this.users = res;
      });
  }

  createNewUser() {
    this.router.navigate(['/app/users/create']);
  }

  delete(id: number) {
    this.userService.delete(id).subscribe(
      (res: any) => {
        this.toastrService.success('تم الحذف بنجاح', 'الحذف');
        const index = this.users.findIndex(f => f.id === res.id);
        this.users.splice(index, 1);
        this.users = [...this.users];
      });
  }
}
