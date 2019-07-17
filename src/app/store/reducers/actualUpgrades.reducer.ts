import { ActualUpgradesActions } from '../actions';
import { Upgrades } from '../../store/models';

export function actualUpgradesReducer(state: Upgrades[] = [], action: ActualUpgradesActions.Actions) {
    switch (action.type) {
        case ActualUpgradesActions.CHANGE_ACTUAL_UPGRADES:
            return state;
        case ActualUpgradesActions.LOAD_ACCESS:
            return state;
        default:
            return state;
    }
}

function getInitialState(payload: any) {
    var length = payload['length'];
    var state = [];
    for (var i = 0; i < length; i++) {
        state.push({ cost: 0, pointsPerClick: 0, pointsPerSecond: 0 });
    }
    return state;
}