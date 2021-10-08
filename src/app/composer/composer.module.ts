import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { ComposerComponent } from './composer.component';

@NgModule({
  declarations: [
    ComposerComponent
  ],
  imports: [MatDialogModule, MatButtonModule],
  providers: []
})
export class ComposerModule { }
