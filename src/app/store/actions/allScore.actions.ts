import { Action } from '@ngrx/store';
import { AllScore } from '../models/score.model';

export const ADD_ALLSCORE = '[ALLSCORE] Add';


export class AddAllScore implements Action {
    readonly type = ADD_ALLSCORE

    constructor(public payload: AllScore) {}
}

export type Actions = AddAllScore