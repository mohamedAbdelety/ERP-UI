import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AlertModule } from 'ngx-bootstrap/alert';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { LoaderModule } from '../../components/loader/loader.module';
import { WidgsterModule } from '../../components/widgster/widgster.module';
import { KindsComponent } from './kinds/kinds.component';
import { KindAddEditComponent } from './kind-add-edit/kind-add-edit.component';

export const routes = [
  { path: '', component: KindsComponent, pathMatch: 'full' },
  { path: 'create', component: KindAddEditComponent, pathMatch: 'full' },
  { path: ':id/edit', component: KindAddEditComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    KindsComponent,
    KindAddEditComponent
  ],
  imports: [
    FormsModule,
    Ng2CarouselamosModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NgxDatatableModule,
    LoaderModule,
    WidgsterModule,
    ButtonsModule,
    BsDropdownModule,
    CollapseModule,
    AlertModule,
    PopoverModule
  ]
})
export class KindModule { }
