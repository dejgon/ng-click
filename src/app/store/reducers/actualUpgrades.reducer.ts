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

function Update(state, payload){
    var newState = state;

    if(payload.upgradeLvl > 30){
        newState[payload.id].pointsPerClick = Math.round(payload.basicUpgrades.pointsPerClick * (( payload.upgradeLvl/10)+1))
        newState[payload.id].pointsPerSecond = Math.round(payload.basicUpgrades.pointsPerSecond * (( payload.upgradeLvl/10)+1));
        newState[payload.id].cost = Math.round(payload.upgradeLvl * (payload.basicUpgrades.cost * (( payload.upgradeLvl/10)-1)));
    }else if(payload.upgradeLvl > 20){
        newState[payload.id].pointsPerClick = Math.round(payload.basicUpgrades.pointsPerClick * 4)
        newState[payload.id].pointsPerSecond = Math.round(payload.basicUpgrades.pointsPerSecond * 4);
        newState[payload.id].cost = Math.round(payload.upgradeLvl * (payload.basicUpgrades.cost * 1.8));
    }else if(payload.upgradeLvl > 10){
        newState[payload.id].pointsPerClick = Math.round(payload.basicUpgrades.pointsPerClick * 2)
        newState[payload.id].pointsPerSecond = Math.round(payload.basicUpgrades.pointsPerSecond * 2);
        newState[payload.id].cost = Math.round(payload.upgradeLvl * (payload.basicUpgrades.cost * 1.4));
    }else{ 
        newState[payload.id].pointsPerClick = Math.round(payload.basicUpgrades.pointsPerClick)
        newState[payload.id].pointsPerSecond = Math.round(payload.basicUpgrades.pointsPerSecond)
        newState[payload.id].cost = Math.round(payload.upgradeLvl * (payload.basicUpgrades.cost * 1.2));
    }
    
    return newState;
}