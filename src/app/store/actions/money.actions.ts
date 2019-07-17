import { Action } from '@ngrx/store';
import { Money } from '../../store/models';

export const ADD_SCORE = '[SCORE] Add';
export const SUBTRACT_SCORE = '[SCORE] Subtract';

export class AddMoney implements Action {
    readonly type = ADD_SCORE

    constructor(public payload: Money) {}
}

export class SubtractMoney implements Action {
    readonly type = SUBTRACT_SCORE

    constructor(public payload: Money) {}
}

export type Actions = AddMoney | SubtractMoney