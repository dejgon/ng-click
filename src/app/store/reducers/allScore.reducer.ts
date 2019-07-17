import { AllScoreActions } from '../actions';
import { AllScore } from '../../store/models';
const initialState = {
    allScore: 0
};

export function allScoreReducer(state: AllScore = getScore(), action: AllScoreActions.Actions) {
    switch(action.type) {
        case AllScoreActions.ADD_ALLSCORE:
            return addScore(state, action.payload);
        default:
            return state;
    }
}
function getScore(){
    return initialState;
}

function addScore(state: any, payload: any){
    state.allScore += payload.allScore;
    return state;
}