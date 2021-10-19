import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { ComposerComponent } from './composer.component';
import { CommonModule } from '@angular/common';

@NgModule({
            declarations: [
              ComposerComponent
            ],
            imports: [CommonModule, MatDialogModule, MatButtonModule],
            providers: []
          })
export class ComposerModule {
}
