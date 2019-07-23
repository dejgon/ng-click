import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, Observable } from 'rxjs';
import { map, concatMap, mergeMap, catchError, withLatestFrom, switchMap, exhaustMap, tap, first } from 'rxjs/operators';

import { DataService } from 'src/app/_services/data.service';
import { AppState } from '../app.state';
import { Store, State } from '@ngrx/store';
import { UpgradesActions, ActualUpgradesActions } from '../actions';

@Injectable()
export class UpgradesEffects {
    
    constructor(
        private actions$: Actions,
        private dataService: DataService,
        private store: Store<AppState>,
    ) {
    
     }

    loadStatistic$ = createEffect(() => this.actions$.pipe(
        ofType('[STATS] Get'),
        concatMap(merge => this.dataService.getStatsByUsername(merge['payload']['username'], localStorage.getItem('token'))
            .pipe(
                map(stats => ({ type: '[STATS] Load Success', payload: stats })),
                catchError(() => EMPTY)
            )
        )
    ));

    loadUpgrades$ = createEffect(() => this.actions$.pipe(
        ofType('[UPGRADES] Get'),
        concatMap(() => this.dataService.getAllUpgrades()
            .pipe(
                map(upgrades => ({ type: '[UPGRADES] Load Success', payload: upgrades })),
                catchError(() => EMPTY)
            )
        )
    ));
    loadActualUpgrades$ = createEffect(() => this.actions$.pipe(
        ofType('[ACTUAL_UPGRADES] Get'),
        concatMap(() => this.dataService.getAllUpgrades()
            .pipe(
                map(upgrades => ({ type: '[ACTUAL_UPGRADES] Load Success', payload: upgrades })),
                catchError(() => EMPTY)
            )
        )
    ));


    buyUpgrade$ = createEffect(() => this.actions$.pipe(
        ofType('[ACTUAL_UPGRADES] Buy'),
        mergeMap(merge => this.store.select('actualUpgrades')
            .pipe(
                exhaustMap(actualUpgrades => [
                    ({ type: '[STATS] UpdateStatsByUpgrade', payload: { id: merge['payload'], upgrade: actualUpgrades[merge['payload']] } }),
                ]),
            )
        )
    ))
    updateUpgrades$ = createEffect(() => this.actions$.pipe(
        ofType('[STATS] UpdateStatsByUpgrade'),
        mergeMap(merge => this.store.select('statistic')
            .pipe(
                exhaustMap(stats => [({ type: '[ACTUAL_UPGRADES] Update2', payload: { id: merge['payload']['id'], upgradeLvl: stats['upgradeLevels'][merge['payload']['id']]['upgradeLvl']} })])
            )
        ))
    )


   
    updateUpgrades2$ = createEffect(() => this.actions$.pipe(
        ofType('[ACTUAL_UPGRADES] Update2'),
        switchMap(merge => this.store.select('upgrades')
            .pipe(
                switchMap(upgrades => [({ type: '[ACTUAL_UPGRADES] Update', payload: {id: merge['payload']['id'] , basicUpgrades: upgrades[merge['payload']['id']],upgradeLvl: merge['payload']['upgradeLvl'] }})])
            )
        ))
    )



}