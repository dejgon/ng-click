import { UpgradesActions } from '../actions';
import { Upgrades } from '../models/upgrades.model';


export function upgradesReducer(state: any, action: UpgradesActions.Actions) {
    switch(action.type) {
        case UpgradesActions.LOAD_SUCCESS:
            return state = action.payload;
        case UpgradesActions.GET_UPGRADES:
            return state;
        default:
            return state;
    }
}

