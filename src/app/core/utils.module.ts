import { NgModule } from '@angular/core';
import { AddSpacePipe } from './custom-pipes/add-space.pipe';

import { SanitizePipe } from './custom-pipes/snitize.pipe';

@NgModule({
  declarations: [SanitizePipe,
    AddSpacePipe],
  exports: [SanitizePipe,
    AddSpacePipe]
})
export class UtilsModule { }
