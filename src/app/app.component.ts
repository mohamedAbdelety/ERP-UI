import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <ngx-spinner>
    <h3>Loading...</h3>
</ngx-spinner>
    <router-outlet></router-outlet>`
})
export class AppComponent {
  constructor() {
  }
}
