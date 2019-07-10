import { Action } from '@ngrx/store';
import { Score } from '../models/score.model';

export const ADD_SCORE = '[SCORE] Add';
export const SUBTRACT_SCORE = '[SCORE] Subtract';

export class AddScore implements Action {
    readonly type = ADD_SCORE

    constructor(public payload: Score) {}
}

export class SubtractScore implements Action {
    readonly type = SUBTRACT_SCORE

    constructor(public payload: Score) {}
}

export type Actions = AddScore | SubtractScore