import * as MultiplierActions from '../actions/multiplier.actions';
import { Multiplier } from '../models/multiplier.model';
const initialState = {
    pointsPerClick: 1,
    pointsPerSecond: 0
};

export function multiplierReducer(state: Multiplier = getScore(), action: MultiplierActions.Actions) {
    switch(action.type) {
        case MultiplierActions.INCR_MULTIPLIERS:
            return incrMultipliers(state, action.payload);
        case MultiplierActions.DECR_MULTIPLIERS:
                return decrMultipliers(state, action.payload);
        default:
            return state;
    }
}
function getScore(){
    return initialState;
}

function getInitialState(){
    var multi = {
        pointsPerClick: 2,
        pointsPerSecond: 2,
    }
    return multi;
}

function incrMultipliers(state: any, payload: any){
    state.pointsPerClick += payload.pointsPerClick;
    state.pointsPerSecond += payload.pointsPerSecond;
    return state;
}
function decrMultipliers(state: any, payload: any){
    state.pointsPerClick -= payload.pointsPerClick;
    state.pointsPerSecond -= payload.pointsPerSecond;
    return state;
}