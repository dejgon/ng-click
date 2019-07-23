export interface Statistic {
    score: number,
    money: number,
    pointsPerClick: number,
    pointsPerSecond: number,
    clicks: number,
    scoreFromClicks: number,
    scoreFromSecond: number,
    timePlayed: number,
    upgradeLevels: [
        {
            upgradeId: number,
            upgradeLvl: number
        }
    ]
}