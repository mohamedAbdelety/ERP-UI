import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap/alert';
import { MainComponent } from './main.component';
import { WidgsterModule } from '../../components/widgster/widgster.module';
import { NgApexchartsModule } from 'ng-apexcharts';

export const routes = [
  { path: '', component: MainComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    WidgsterModule,
    AlertModule
  ]
})
export class MainModule { }
