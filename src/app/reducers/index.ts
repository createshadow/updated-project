import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "../../environments/environment";
import { storeFreeze } from 'ngrx-store-freeze';

import { IProfileState, profileReducer } from "../store/reducers/profile.reducer";


export interface IAppState {
  profile: IProfileState
}

export const reducers: ActionReducerMap<IAppState> = {
  profile: profileReducer,
};

// console.log all actions
export function logger(reducer: ActionReducer<IAppState>): ActionReducer<IAppState> {
  return function(state: IAppState, action: any): IAppState {
    // console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<IAppState>[] = !environment.production
  ? [logger, storeFreeze]
  : [logger];
