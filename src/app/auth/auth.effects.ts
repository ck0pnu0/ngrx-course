import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as fromActions from './auth.actions';
import { map, tap } from "rxjs/operators";
import { Router } from "@angular/router";


@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private router: Router) {}

    login$ = createEffect(() => this.actions$.pipe(
        ofType(fromActions.login),
        tap(({ user }) => localStorage.setItem('user', JSON.stringify(user)))
    ), { dispatch: false }); 

    logout$ = createEffect(() => this.actions$.pipe(
        ofType(fromActions.logout),
        tap(() => {
            localStorage.removeItem('user');
            this.router.navigateByUrl('/login');
        })
    ), { dispatch: false });
}