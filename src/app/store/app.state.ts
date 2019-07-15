import { Score, AllScore } from './models/score.model';
import { Upgrades } from './models/upgrades.model';
import { createFeatureSelector } from '@ngrx/store';
import { Multiplier } from './models/multiplier.model';
import { UserStatsId } from './models/userStatsId.model';
export interface AppState {
  readonly score: Score;
  readonly allScore: AllScore;
  readonly multiplier: Multiplier;
  readonly upgrades: Upgrades;
  readonly userStatsId: UserStatsId;
}