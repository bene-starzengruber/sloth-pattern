import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    import('./composer/index').then(index => {
      this.dialog.open(index.ComposerComponent, { width: '500px' });
    });
  }

}
