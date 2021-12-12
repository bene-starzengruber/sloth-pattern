import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ComposerExposedService {

  private name$ = this.http.get<string[]>(`https://random-word-form.herokuapp.com/random/noun`).pipe(
    map(words => words[0]),
    shareReplay(1)
  );

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  getName(): Observable<string> {
    return this.name$;
  }

  openDialog(): void {
    this.preload().then(index => {
      this.dialog.open(index.ComposerComponent, { width: '500px' });
    })
  }

  /** http://instantclick.io/click-test */
  preload(): Promise<typeof import('./index')> {
    return import('./index');
  }

}
