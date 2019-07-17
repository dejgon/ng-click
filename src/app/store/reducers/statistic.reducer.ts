import { StatisticActions } from '../actions';
import { Statistic } from '../../store/models';

const initialStateClick = null;

export function statisticReducer(state: any, action: StatisticActions.Actions) {

    switch (action.type) {
        case StatisticActions.GET_STATISTIC:
            return state;
        case StatisticActions.LOAD_SUCCESS:
            return state = action.payload;
        case StatisticActions.CLICK_EVENT:
            return ClickEvent(state);
        case StatisticActions.TICK_EVENT:
            return TickEvent(state);
        default:
            return state;
    }
}
function ClickEvent(state){
    var newState = state;
    newState.score += state.pointsPerClick;
    newState.money += state.pointsPerClick;
    newState.scoreFromClicks += state.pointsPerClick;
    return newState;
}
function TickEvent(state){
    var newState = state;
    newState.score += state.pointsPerSecond;
    newState.money += state.pointsPerSecond;
    newState.scoreFromSecond += state.pointsPerSecond;
    return newState;
}