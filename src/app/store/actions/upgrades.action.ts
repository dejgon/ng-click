import { Action } from '@ngrx/store';
import { Upgrades } from '../models/upgrades.model';

export const INCREMENT_VALUE = '[VALUE] Increment';
export const DECREMENT_VALUE = '[VALUE] Decrement';

export class IncrementValue implements Action {
    readonly type = INCREMENT_VALUE

    constructor(public payload: Upgrades) {}
}

export class DecrementValue implements Action {
    readonly type = DECREMENT_VALUE

    constructor(public payload: Upgrades) {}
}

export type Actions = IncrementValue | DecrementValue