import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ComposerService {

  private name$ = this.http.get<string[]>(`https://random-word-form.herokuapp.com/random/noun`).pipe(
    map(words => words[0]),
    shareReplay(1)
  );

  constructor(private http: HttpClient) {}

  getName(): Observable<string> {
    return this.name$;
  }
}
