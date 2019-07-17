import { Action } from '@ngrx/store';
import { UserStatsId } from '../../store/models';

export const SAVE_USER_STATS_ID = '[UserStatsId] Save';


export class SaveUserStatsId implements Action {
    readonly type = SAVE_USER_STATS_ID

    constructor(public payload: UserStatsId) {}
}

export type Actions = SaveUserStatsId