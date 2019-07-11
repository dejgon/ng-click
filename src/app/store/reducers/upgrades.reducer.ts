import * as UpgradesActions from '../actions/upgrades.action';
import { Upgrades } from '../models/upgrades.model';
const initialState = [{
    idUpgrade: 0,
    upgradeLevel: 0
},
{
    idUpgrade: 1,
    upgradeLevel: 0
}];

export function upgradesReducer(state: Upgrades[] = initialState, action: UpgradesActions.Actions) {
    switch(action.type) {
        case UpgradesActions.INCREMENT_VALUE:
            state[action.payload.idUpgrade].upgradeLevel += 1;
            return state;
        case UpgradesActions.DECREMENT_VALUE:
            state[action.payload.idUpgrade].upgradeLevel -= 1;
            return state;
        default:
            return state;
    }
}


