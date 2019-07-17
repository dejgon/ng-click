import { Action } from '@ngrx/store';
import { Upgrades } from '../../store/models';

export const CHANGE_ACTUAL_UPGRADES = '[ACTUAL_UPGRADES] Change';
export const LOAD_ACCESS = '[ACTUAL_UPGRADES] Load Access';

export class ChangeActualUpgradesValue implements Action {
    readonly type = CHANGE_ACTUAL_UPGRADES

    constructor(public payload: Upgrades) {}
}
export class LoadAccess implements Action {
    readonly type = LOAD_ACCESS

    constructor(public payload: Upgrades){}
}

export type Actions = ChangeActualUpgradesValue | LoadAccess