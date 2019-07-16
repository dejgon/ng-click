import * as UpgradesActions from '../actions/upgrades.action';
import { Upgrades } from '../models/upgrades.model';

export function upgradesReducer(state: Upgrades[] = [], action: UpgradesActions.Actions) {
    switch(action.type) {
        case UpgradesActions.INCREMENT_VALUE:
            state[action.payload.upgradeId].upgradeLvl += action.payload.upgradeLvl;
            return state;
        case UpgradesActions.GET_UPGRADES:
            return state;
        case UpgradesActions.LOAD_SUCCESS:
            return getInitialState(action.payload);
        case UpgradesActions.DECREMENT_VALUE:
            state[action.payload.upgradeId].upgradeLvl -= action.payload.upgradeLvl;
            return state;
        default:
            return state;
    }
}

function getInitialState(payload: any){
    var length = payload['length'];
    var state = [];
    for(var i=0; i<length; i++){
        state.push({upgradeId: i, upgradeLvl: 0});
    }
    return state;
}