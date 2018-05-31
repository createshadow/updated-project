import { ActionWithPayload } from './index';

export enum ProfileActionTypes {
  REGISTER_USER = '[Profile] Register User',
  LOGIN_USER = '[Profile] Login User',
  LOGOUT = '[Profile] Logout',
  LOAD_SESSION = '[Profile] Load User',
  LOAD_SESSION_SUCCESS = '[Profile] Load User Success',
  LOAD_SESSION_FAIL = '[Profile] Load User Fail',
  UPDATE_USER = '[Profile] UpdateUser',
}

export class LoginUser implements ActionWithPayload {
  readonly type = ProfileActionTypes.LOGIN_USER;
  constructor(public payload) {}
}

export class Logout implements ActionWithPayload {
  readonly type = ProfileActionTypes.LOGOUT;
}

export class LoadSession implements ActionWithPayload {
  readonly type = ProfileActionTypes.LOAD_SESSION;
  constructor(public payload?) {}
}

export class LoadSessionSuccess implements ActionWithPayload {
  readonly type = ProfileActionTypes.LOAD_SESSION_SUCCESS;
  constructor(public payload) {}
}

export class LoadSessionFail implements ActionWithPayload {
  readonly type = ProfileActionTypes.LOAD_SESSION_FAIL;
  constructor(public payload) {}
}

export class UpdateUser implements ActionWithPayload {
  readonly type = ProfileActionTypes.UPDATE_USER;
  constructor(public payload) {}
}


export class RegisterUser implements ActionWithPayload {
  readonly type = ProfileActionTypes.REGISTER_USER;
}

export type ProfileActions =
  LoginUser |
  RegisterUser |
  Logout |
  LoadSession |
  LoadSessionSuccess |
  LoadSessionFail |
  UpdateUser;
