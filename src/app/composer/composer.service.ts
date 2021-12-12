import { Injectable } from '@angular/core';
import { ComposerExposedService } from './composer-exposed.service';

@Injectable({ providedIn: 'root' })
export class ComposerService {

  constructor(public exposed: ComposerExposedService) {}

  method1(): void {
    console.log('method1');
  }

  method2(): void {
    console.log('method2');
  }

  method3(): void {
    console.log('method3');
  }

  method4(): void {
    console.log('method4');
  }
}
