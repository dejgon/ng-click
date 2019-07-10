import { Action } from '@ngrx/store';
import { Multiplier } from '../models/multiplier.model';

export const INCR_MULTIPLIERS = '[MULTIPLIERS] Increment';
export const DECR_MULTIPLIERS = '[MULTIPLIERS] Decrement';

export class IncrementMult implements Action {
    readonly type = INCR_MULTIPLIERS

    constructor(public payload: Multiplier) {}
}

export class DecrementMult implements Action {
    readonly type = DECR_MULTIPLIERS

    constructor(public payload: Multiplier) {}
}

export type Actions = IncrementMult | DecrementMult