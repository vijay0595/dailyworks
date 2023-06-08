// some.actions.ts
import { createAction, props } from '@ngrx/store';
export const someAction = createAction('[Some Feature] Some Action', props<{ payload: any }>());
export const someSuccessAction = createAction('[Some Feature] Some Success Action', props<{ payload: any }>());
export const resetState = createAction('clear State');
