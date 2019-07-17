import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { DataService } from 'src/app/_services/data.service';

@Injectable()
export class UpgradesEffects {

    @Effect()
    loadActualUpgrades$ = createEffect(() => this.actions$.pipe(
        ofType('[ACTUAL_UPGRADES] Get'),
        mergeMap(() => this.dataService.getAllUpgrades()
            .pipe(
                map(upgrades => ({ type: '[ACTUAL_UPGRADES] Load Success', payload: upgrades })),
                catchError(() => EMPTY)
            ))
    ));
    @Effect()
    loadStatistic$ = createEffect(() => this.actions$.pipe(
        ofType('[STATS] Get'),
        mergeMap(merge => this.dataService.getStatsById(merge['payload']['username'])
        .pipe(
            map(stats => ({ type: '[STATS] Load Success', payload: stats})),
            catchError(() => EMPTY)
        ))
    ));
    @Effect()
    loadUpgrades$ = createEffect(() => this.actions$.pipe(
        ofType('[UPGRADES] Get'),
        mergeMap(() => this.dataService.getAllUpgrades()
            .pipe(
                map(upgrades => ({ type: '[UPGRADES] Load Success', payload: upgrades })),
                catchError(() => EMPTY)
            ))
    ));
    

    constructor(
        private actions$: Actions,
        private dataService: DataService
    ){}
}