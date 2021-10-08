import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';

import { ComposerComponent } from './composer.component';

@NgModule({
  declarations: [
    ComposerComponent
  ],
  imports: [MatDialogModule],
  providers: []
})
export class ComposerModule { }
