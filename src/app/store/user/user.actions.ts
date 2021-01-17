import { createAction, props } from '@ngrx/store';
import { User, SignUpData } from '../../core/models/backend';

// #region Email Login
export const ReqEmailLogin = createAction(
  '[Login Page] ReqEmailLogin',
  props<{ email: string; password: string; executedTime: number }>()
);
export const EmailLoginSuccess = createAction(
  '[ReqEmailLogin] [SCU] EmailLoginSuccess',
  props<{ user: User; executedTime: number }>()
);
export const EmailLoginFail = createAction(
  '[ReqEmailLogin] EmailLoginFail',
  props<{ executedTime: number }>()
);

// #endregion

// #region Email registration
export const ReqEmailRegister = createAction(
  '[Register Page] ReqEmailRegister',
  props<{
    email: string;
    password: string;
    signUpData: SignUpData;
    executedTime: number;
  }>()
);
export const EmailRegisterSuccess = createAction(
  '[ReqEmailRegister] EmailRegisterSuccess',
  props<{ user: User; executedTime: number }>()
);
export const EmailRegistrationFail = createAction(
  '[ReqEmailRegistration] EmailRegistrationFail',
  props<{ executedTime: number }>()
);

// #endregion

// #region Provider Sign In
export const ReqProviderSignIn = createAction(
  '[Register Page] ReqProviderSignIn',
  props<{ provider: any; executedTime: number }>()
);
export const ProviderSignInFail = createAction(
  '[ReqProviderSignIn] ProviderSignInFail',
  props<{ executedTime: number }>()
);
export const ProviderSignInSuccess = createAction(
  '[ReqProviderSignIn] ProviderSignInSuccess',
  props<{ user: User; executedTime: number }>()
);
//#endregion

export const UpdateUserFromInit = createAction(
  '[ReqLinkUser] [SCU] UpdateUserFromInit',
  props<{ user: User; executedTime: number }>()
);

// #region Logout
export const ReqLogoutAction = createAction('[Any] [NF] Logout');

export const ClearState = createAction('[ALL] ClearState');
// #endregion
