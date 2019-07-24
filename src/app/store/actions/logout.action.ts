import { Action } from '@ngrx/store';

export class ActionsTypes {
    static LOGOUT = "[App] logout";
  }
  
export class Logout implements Action {
    readonly type = ActionsTypes.LOGOUT;
}
  