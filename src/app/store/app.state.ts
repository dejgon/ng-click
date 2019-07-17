import { ActualUpgrades, Money, Multiplier, AllScore, Upgrades, UserStatsId } from '../store/models';
export interface AppState {
  readonly score: Money;
  readonly allScore: AllScore;
  readonly multiplier: Multiplier;
  readonly upgrades: Upgrades;
  readonly userStatsId: UserStatsId;
  readonly actualUpgrades: ActualUpgrades;
}