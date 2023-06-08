// some.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { someAction, someSuccessAction } from './some.actions';

@Injectable()
export class SomeEffects {
  someEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(someAction),
      mergeMap(action => {
        // Perform side effect logic here
        return of(someSuccessAction({ payload: action }));
      })
    )
  );
  constructor(private actions$: Actions) {}
}
