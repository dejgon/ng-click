
import * as  UserStatsIdActions from '../actions/userStatsId.actions';
import { UserStatsId } from '../models/userStatsId.model';
const initialState = {
    userStatsId: null
};

export function userStatsIdReducer(state: UserStatsId = initialState, action: UserStatsIdActions.Actions) {
    switch(action.type) {
        case UserStatsIdActions.SAVE_USER_STATS_ID:         
            return state = action.payload;
        default:
            return state;
    }
}


