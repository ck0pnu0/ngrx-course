import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromAuth from '../auth/reducers';

export const appFeatureKey = 'app';

export interface AppState {
  auth: fromAuth.AuthState;
}

export const initialAppState: AppState = {
  auth: fromAuth.initialAuthState
};

export const appReducer = createReducer(
  initialAppState,
);
