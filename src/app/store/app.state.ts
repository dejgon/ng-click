import { Upgrades, UserStatsId, Statistic } from '../store/models';
export interface AppState {
  readonly upgrades: Upgrades;
  readonly userStatsId: UserStatsId;
  readonly actualUpgrades: Upgrades;
  readonly statistic: Statistic;
}