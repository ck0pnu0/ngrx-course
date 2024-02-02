import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { AuthState } from '../auth/reducers';

export const appFeatureKey = 'app';

export interface AppState {
  auth: AuthState;
}
