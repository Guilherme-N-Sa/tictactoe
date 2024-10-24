export interface IPlayerData {
  id: number;
  name: string;
  symbol: string;
}

export interface IPlayersData {
  [id: number]: IPlayerData;
}
