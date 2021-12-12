import { ComposerExposedService } from './composer-exposed.service';
import { ComponentStore } from '@ngrx/component-store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface ComposerState {
  name?: string;
}

@Injectable()
export class ComposerService extends ComponentStore<ComposerState> {

  name$ = this.select(state => state.name);

  constructor(public exposed: ComposerExposedService) {
    super({});

    connect(this, exposed.getName(), 'name');
  }

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

function connect<T extends object, K extends keyof T>(store: ComponentStore<T>, stream: Observable<T[K]>, property: K): void {
  const objectified = stream.pipe(map(value => ({ [property]: value } as unknown as Partial<T>))); // xylophone -> { name: xylophone }
  store.patchState(objectified);
}
