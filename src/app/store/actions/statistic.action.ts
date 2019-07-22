import { Action } from '@ngrx/store';
import { Statistic, Upgrades } from '../models';

export const GET_STATISTIC = '[STATS] Get';
export const LOAD_SUCCESS = '[STATS] Load Success';
export const CLICK_EVENT = '[STATS] Click';
export const TICK_EVENT = '[STATS] Tick';
export const UPDATE_STATS_BY_UPGRADE = '[STATS] UpdateStatsByUpgrade'

export class GetStatistic implements Action {
    readonly type = GET_STATISTIC

    constructor(public payload: { username: string }) {}
}
export class LoadSuccess implements Action {
    readonly type = LOAD_SUCCESS

    constructor(public payload: Statistic) {}
}
export class ClickEvent implements Action {
    readonly type = CLICK_EVENT
}
export class TickEvent implements Action {
    readonly type = TICK_EVENT
}
export class UpdateStatsByUpgrade implements Action {
    readonly type = UPDATE_STATS_BY_UPGRADE

    constructor(public payload: {id: number, upgrade: Upgrades}){};
}

export type Actions = GetStatistic | LoadSuccess | ClickEvent | TickEvent | UpdateStatsByUpgrade