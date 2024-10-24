const initialBoard = new Array(3).fill(null).map(() => new Array(3).fill(null));
const initialPlayers = {
  X: {
    name: "Player 1",
    symbol: "X",
  },
  O: {
    name: "Player 2",
    symbol: "O",
  },
};
export { initialBoard, initialPlayers };
