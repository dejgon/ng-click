import * as ScoreActions from '../actions/score.actions';
import { Score } from '../models/score.model';
const initialState = {score: 0};

export function scoreReducer(state: Score = getScore(), action: ScoreActions.Actions) {
    switch(action.type) {
        case ScoreActions.ADD_SCORE:
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