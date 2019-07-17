import { MoneyActions } from '../actions'
import { Money } from '../../store/models';
const initialState = {
    score: 0
};

export function scoreReducer(state: Money = getScore(), action: MoneyActions.Actions) {
    switch(action.type) {
        case MoneyActions.ADD_SCORE:
            return addScore(state, action.payload);
        case MoneyActions.SUBTRACT_SCORE:
            return subtractScore(state, action.payload);
        default:
            return state;
    }
}

function getScore(){
    return initialState;
}

function addScore(state: any, payload: any){
    state.score += payload.score;
    return state;
}
function subtractScore(state: any, payload: any){
    state.score -= payload.score;
    return state;
}
