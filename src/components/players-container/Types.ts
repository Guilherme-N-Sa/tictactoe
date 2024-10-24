export interface IPlayerData {
  name: string;
  symbol: string;
}

export interface IPlayersData {
  [key: string]: IPlayerData;
}
