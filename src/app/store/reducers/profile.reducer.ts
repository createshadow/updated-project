import { ProfileActions, ProfileActionTypes } from "../actions/profile.actions";

export interface IProfileState {
  isLoggedIn: boolean;
  user;
  loaded: boolean;
  loading: boolean;
}

export const INITIAL_STATE: IProfileState = {
  isLoggedIn: false,
  user: null,
  loaded: false,
  loading: false
};

export function profileReducer (state: IProfileState = INITIAL_STATE, action: ProfileActions): IProfileState {
  switch (action.type) {
    case ProfileActionTypes.LOGIN_USER:
      return state;
    case ProfileActionTypes.REGISTER_USER:
      return state;
    case ProfileActionTypes.LOGOUT:
      return {...state, user: null, isLoggedIn: false };
    case ProfileActionTypes.LOAD_SESSION:
      return {...state, loading: true };
    case ProfileActionTypes.LOAD_SESSION_SUCCESS:
      return {...state, loading: false, loaded: true, isLoggedIn: true };
    case ProfileActionTypes.LOAD_SESSION_FAIL:
      return {...state, loading: false, loaded: false };
    case ProfileActionTypes.UPDATE_USER: return updateUser(state, action);
    default: {
      return state;
    }
  }
}

function updateUser(state, action) {
  return Object.assign({}, state, { user: action.payload });
}
