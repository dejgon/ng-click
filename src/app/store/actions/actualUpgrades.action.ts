import { Action } from '@ngrx/store';
import { Upgrades } from '../../store/models';

export const CHANGE_ACTUAL_UPGRADES = '[ACTUAL_UPGRADES] Change';
export const LOAD_SUCCESS = '[ACTUAL_UPGRADES] Load Success';
export const UPDATE = '[ACTUAL_UPGRADES] Update';
export const UPDATE2 = '[ACTUAL_UPGRADES] Update2';
export const BUY = '[ACTUAL_UPGRADES] Buy';
export const GET_UPGRADES = '[ACTUAL_UPGRADES] Get';

export class Buy implements Action {
    readonly type = BUY

    constructor(public payload: {id: number}){};
}
export class ChangeActualUpgradesValue implements Action {
    readonly type = CHANGE_ACTUAL_UPGRADES

    constructor(public payload: Upgrades) {}
}
export class LoadSuccess implements Action {
    readonly type = LOAD_SUCCESS

    constructor(public payload: Upgrades[]){}
}
export class Update implements Action {
    readonly type = UPDATE

    constructor(public payload: {id: number, basicUpgrades: any, upgradeLvl: number}){};
}
export class Update2 implements Action {
    readonly type = UPDATE2
}

export class GetUpgrades implements Action {
    readonly type = GET_UPGRADES
}

export type Actions = ChangeActualUpgradesValue | LoadSuccess | Update | Buy | GetUpgrades | Update2