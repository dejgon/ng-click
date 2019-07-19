export interface Statistic {
    id: string,
    username: string,
    score: number,
    money: number,
    pointsPerClick: number,
    pointsPerSecond: number,
    clicks: number,
    scoreFromClicks: number,
    scoreFromSecond: number,
    upgradeLvls: [
        {
            upgradeId: number,
            upgradeLvl: number
        }
    ]
}