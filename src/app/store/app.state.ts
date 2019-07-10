import { Score } from './models/score.model';
import { Upgrades } from './models/upgrades.model';
export interface AppState {
  readonly score: Score;
  readonly upgrades: Upgrades;
}
