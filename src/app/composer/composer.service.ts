import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

@Injectable({ providedIn: 'root' })
export class ComposerService {

  private name$ = this.http.get<string[]>(`https://random-word-form.herokuapp.com/random/noun`).pipe(
    map(words => words[0]),
    shareReplay(1)
  );

  constructor(private http: HttpClient, private dialog: MatDialog) {}

  getName(): Observable<string> {
    return this.name$;
  }

  openDialog(): void {
    import('./index').then(index => {
      this.dialog.open(index.ComposerComponent, { width: '500px' });
    });
  }
}
