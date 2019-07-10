import * as UpgradesActions from '../actions/upgrades.action';
import { Upgrades } from '../models/upgrades.model';
const initialState = {
    upgrade1: 1,
    upgrade2: 1,
    upgrade3: 1
};

export function scoreReducer(state: Upgrades = getScore(), action: UpgradesActions.Actions) {
    switch(action.type) {
        case UpgradesActions.INCREMENT_VALUE:
            return addScore(state, action.payload);
    }
}

function getScore(){
    return initialState;
}

function addScore(state: any, payload: any){
    var newScore = state.score + payload.score;
    return {score: newScore};
}