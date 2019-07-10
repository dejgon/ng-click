import { Score } from './models/score.model';
import { Upgrades } from './models/upgrades.model';
import { createFeatureSelector } from '@ngrx/store';
import { Multiplier } from './models/multiplier.model';
export interface AppState {
  readonly score: Score;
  readonly multiplier: Multiplier
}