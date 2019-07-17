import { Action } from '@ngrx/store';
import { Upgrades } from '../../store/models';

export const INCREMENT_VALUE = '[VALUE] Increment';
export const DECREMENT_VALUE = '[VALUE] Decrement';
export const GET_UPGRADES = '[UPGRADES] Get';
export const LOAD_SUCCESS = '[UPGRADES] Load Success';

export class IncrementValue implements Action {
    readonly type = INCREMENT_VALUE

    constructor(public payload: Upgrades) {}
}

export class DecrementValue implements Action {
    readonly type = DECREMENT_VALUE

    constructor(public payload: Upgrades) {}
}

export class GetInitialData implements Action {
    readonly type = GET_UPGRADES

}

export class LoadSuccess implements Action {
    readonly type = LOAD_SUCCESS

    constructor(public payload: Upgrades) {}
}

export type Actions = IncrementValue | DecrementValue | GetInitialData | LoadSuccess