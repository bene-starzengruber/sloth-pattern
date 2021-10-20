import { Component } from '@angular/core';
import { ComposerService } from './composer/composer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name$ = this.composerService.getName();

  constructor(private composerService: ComposerService) { }

  openDialog() {
    this.composerService.openDialog();
  }

}
