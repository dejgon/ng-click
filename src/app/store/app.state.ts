import { Upgrades, UserStatsId, Statistic, ActualUpgrades } from '../store/models';
export interface AppState {
  readonly upgrades: Upgrades;
  readonly userStatsId: UserStatsId;
  readonly actualUpgrades: ActualUpgrades;
  readonly statistic: Statistic;
}