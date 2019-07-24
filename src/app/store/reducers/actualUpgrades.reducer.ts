import { ActualUpgradesActions } from '../actions';

export function actualUpgradesReducer(state: any, action: ActualUpgradesActions.Actions) {
    switch (action.type) {
        case ActualUpgradesActions.GET_UPGRADES:
            return state;
        case ActualUpgradesActions.CHANGE_ACTUAL_UPGRADES:
            return state;
        case ActualUpgradesActions.LOAD_SUCCESS:
            return state = action.payload;
        case ActualUpgradesActions.UPDATE:
            return Update(state, action.payload);
        case ActualUpgradesActions.INITIAL_UPDATE:
            return state;
        case ActualUpgradesActions.BUY:
            return state;
        default:
            return state;
    }
}

function Update(state, payload){
    var upgrade_id = payload.id
    var basicPPC = payload.basicUpgrades.pointsPerClick
    var basicPPS = payload.basicUpgrades.pointsPerSecond
    var basicCost = payload.basicUpgrades.cost
    var actualLvl = payload.upgradeLvl
    var przelicznikPPC = Math.round(actualLvl/5);
    var przelicznikCost = 1 + Math.round(actualLvl/3) * 0.1;

    state[upgrade_id].pointsPerClick = Math.round(basicPPC * przelicznikPPC)
    state[upgrade_id].pointsPerSecond = Math.round(basicPPS * przelicznikPPC)
    state[upgrade_id].cost = Math.round(actualLvl * (basicCost * przelicznikCost));

    return state;
}