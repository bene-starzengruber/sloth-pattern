import { Component } from '@angular/core';
import { ComposerService } from './composer.service';

@Component({
  selector: 'app-composer',
  templateUrl: './composer.component.html',
  providers: [ComposerService]
})
export class ComposerComponent {

  name$ = this.composerService.name$;

  constructor(public composerService: ComposerService) {
  }

}
