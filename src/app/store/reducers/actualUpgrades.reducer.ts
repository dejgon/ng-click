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
    var id = payload.id
    var basicPPC = payload.basicUpgrades.pointsPerClick
    var basicPPS = payload.basicUpgrades.pointsPerSecond
    var basicC = payload.basicUpgrades.cost
    var actualLvl = payload.upgradeLvl

    if(actualLvl > 30){
        state[id].pointsPerClick = Math.round(basicPPC * (( actualLvl/10)+1))
        state[id].pointsPerSecond = Math.round(basicPPS * (( actualLvl/10)+1));
        state[id].cost = Math.round(actualLvl * (basicC * (( actualLvl/10)-1)));
    }else if(actualLvl > 20){
        state[id].pointsPerClick = Math.round(basicPPC * 4)
        state[id].pointsPerSecond = Math.round(basicPPS * 4);
        state[id].cost = Math.round(actualLvl * (basicC * 1.8));
    }else if(actualLvl > 10){
        state[id].pointsPerClick = Math.round(basicPPC * 2)
        state[id].pointsPerSecond = Math.round(basicPPS * 2);
        state[id].cost = Math.round(actualLvl * (basicC * 1.4));
    }else{ 
        state[id].pointsPerClick = Math.round(basicPPC)
        state[id].pointsPerSecond = Math.round(basicPPS)
        state[id].cost = Math.round(actualLvl * (basicC * 1.2));
    }
    return state;
}