import * as ActualUpgradesActions from '../actions/actualUpgrades.action';
import { ActualUpgrades } from '../models/actualUpgrades.model';

export function actualUpgradesReducer(state: ActualUpgrades[] = [], action: ActualUpgradesActions.Actions) {
    switch (action.type) {
        case ActualUpgradesActions.INCREMENT_ACT_UPGRADES_VAL:

            console.log(state);
            state[action.payload.upgradeId].cost = action.payload.cost;
            state[action.payload.upgradeId].pointsPerClick = action.payload.pointsPerClick;
            state[action.payload.upgradeId].pointsPerSecond = action.payload.pointsPerSecond;
            return state  ;
        case ActualUpgradesActions.DECREMENT_ACT_UPGRADES_VAL:

            return [...state,action.payload];
        case ActualUpgradesActions.GET_ACTUAL_UPGRADES:
            return state;
        case ActualUpgradesActions.LOAD_ACTUAL_SUCCESS:
            return getInitialState(action.payload);
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
    console.log(state);
    return state;
}