import { Upgrades, Statistic } from '../store/models';
export interface AppState {
  readonly upgrades: Upgrades;
  readonly actualUpgrades: Upgrades;
  readonly statistic: Statistic;
}