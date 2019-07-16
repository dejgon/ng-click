import * as UpgradesActions from '../actions/upgrades.action';
import { Upgrades } from '../models/upgrades.model';
const initialState = [{
    upgradeId: 0,
    upgradeLvl: 0
},
{
    upgradeId: 1,
    upgradeLvl: 0
}];

export function upgradesReducer(state: Upgrades[] = initialState, action: UpgradesActions.Actions) {
    switch(action.type) {
        case UpgradesActions.INCREMENT_VALUE:
            state[action.payload.upgradeId].upgradeLvl += action.payload.upgradeLvl;
            return state;
        case UpgradesActions.DECREMENT_VALUE:
            state[action.payload.upgradeId].upgradeLvl -= action.payload.upgradeLvl;
            return state;
        default:
            return state;
    }
}


