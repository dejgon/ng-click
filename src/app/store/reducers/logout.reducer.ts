import { ActionsTypes } from '../actions/logout.action';

export function clearState(reducer) {
    return function (state, action) {
  
      if (action.type === ActionsTypes.LOGOUT) {
        state = undefined;
      }
  
      return reducer(state, action);
    };
  }