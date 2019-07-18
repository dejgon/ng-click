import { ActualUpgradesActions } from '../actions';
import { ActualUpgrades, Upgrades } from '../../store/models';

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
        case ActualUpgradesActions.UPDATE2:
            return state;
        case ActualUpgradesActions.BUY:
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
function Update(state, payload){
    var newState = state;
    console.log({Payload: "asdsad"},payload)
     newState[payload.id].pointsPerClick = (Math.round(payload.upgradeLvl * (payload.basicUpgrades.pointsPerClick * 1.2))*100)/100;
     newState[payload.id].pointsPerSecond = Math.round(payload.upgradeLvl * (payload.basicUpgrades.pointsPerSecond * 1.0));
     newState[payload.id].cost = Math.round(payload.upgradeLvl * (payload.basicUpgrades.cost * 1.5));
    //newState[0].cost = 10000;
    return newState;
}