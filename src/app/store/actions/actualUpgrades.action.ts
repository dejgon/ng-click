import { Action } from '@ngrx/store';
import { ActualUpgrades } from '../../store/models';

export const INCREMENT_ACT_UPGRADES_VAL = '[ACT_UPGRADES_VAL] Increment';
export const DECREMENT_ACT_UPGRADES_VAL = '[ACT_UPGRADES_VAL] Decrement';

export const GET_ACTUAL_UPGRADES = '[ACTUAL_UPGRADES] Get';
export const LOAD_ACTUAL_SUCCESS = '[ACTUAL_UPGRADES] Load Success';

export class IncrementActualUpgradesValue implements Action {
    readonly type = INCREMENT_ACT_UPGRADES_VAL

    constructor(public payload: ActualUpgrades) {}
}

export class DecrementActualUpgradesValue implements Action {
    readonly type = DECREMENT_ACT_UPGRADES_VAL

    constructor(public payload: ActualUpgrades) {}
}
export class GetInitialData implements Action {
    readonly type = GET_ACTUAL_UPGRADES

}

export class LoadSuccess implements Action {
    readonly type = LOAD_ACTUAL_SUCCESS

    constructor(public payload: ActualUpgrades) {}
}


export type Actions = IncrementActualUpgradesValue | DecrementActualUpgradesValue | GetInitialData | LoadSuccess