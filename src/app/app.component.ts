import { Component } from '@angular/core';
import { ComposerExposedService } from './composer';

@Component({
             selector: 'app-root',
             templateUrl: './app.component.html',
             styleUrls: ['./app.component.scss']
           })
export class AppComponent {

  name$ = this.composerService.getName();

  constructor(private composerService: ComposerExposedService) { }

  openDialog() {
    this.composerService.openDialog();
  }

}
