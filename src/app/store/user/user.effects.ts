import { Injectable } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { combineLatest, of } from 'rxjs';
import * as actions from './user.actions';
import { Store, select, Action } from '@ngrx/store';
import {
  mergeMap,
  take,
  catchError,
  tap,
  switchMap,
  takeUntil,
} from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
@Injectable()
export class AuthEffects {}
