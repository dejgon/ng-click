import { Action } from '@ngrx/store';
import { Upgrades } from '../../store/models';

export const GET_UPGRADES = '[UPGRADES] Get';
export const LOAD_SUCCESS = '[UPGRADES] Load Success';

export class GetUpgrades implements Action {
    readonly type = GET_UPGRADES
}

export class LoadSuccess implements Action {
    readonly type = LOAD_SUCCESS

    constructor(public payload: Upgrades[]) {}
}


export type Actions = GetUpgrades | LoadSuccess