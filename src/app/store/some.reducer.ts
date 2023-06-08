// some.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { someAction ,resetState} from './some.actions';
import { AppState } from './app.state';

export const initialState: AppState = {
  name: '',
  email: '',
  password: '',
};

export const someReducer = createReducer(
  initialState,
  on(someAction, (state, action) => {
    // Modify and return the new state based on the action
    return { 
      ...state,
      email:action?.payload.email,
      name:action?.payload.name,
      password:action?.payload.password
    };
    
  }),
  on(resetState, () => initialState)
);

