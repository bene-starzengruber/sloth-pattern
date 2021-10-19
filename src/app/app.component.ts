import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ComposerService } from './composer/composer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name$ = this.composerService.getName();

  constructor(private dialog: MatDialog, private composerService: ComposerService) { }

  openDialog() {
    import('./composer/index').then(index => {
      this.dialog.open(index.ComposerComponent, { width: '500px' });
    });
  }

}
