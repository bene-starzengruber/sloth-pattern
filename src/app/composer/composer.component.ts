import { Component } from '@angular/core';
import { ComposerService } from './composer.service';

@Component({
  selector: 'app-composer',
  templateUrl: './composer.component.html'
})
export class ComposerComponent {

  name$ = this.composerService.getName();

  constructor(public composerService: ComposerService) {
  }

}
