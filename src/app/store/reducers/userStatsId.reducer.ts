import { UserStatsIdActions } from '../actions';
import { UserStatsId } from '../../store/models';
const initialState = {
    userStatsId: null,
    username: null
};

export function userStatsIdReducer(state: UserStatsId = initialState, action: UserStatsIdActions.Actions) {
    switch(action.type) {
        case UserStatsIdActions.SAVE_USER_STATS_ID:         
            return state = action.payload;
        default:
            return state;
    }
}