export const Player = {
  ONE: '🍔',
  TWO: '🍟',
};

export const INITIAL_SQUARES = Array(9).fill(null);

export const PLAYER_COUNT = Object.keys(Player).length;

const WINNER_CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const WINNERS_COLOR = '#ffe166';

// 게임에 이겼는지 아직 게임중인지 또는 무승부인지 반환하는 함수

let winnerInfo = null;
export function checkWinner(squares) {
  for (const [x, y, z] of WINNER_CONDITIONS) {
    const winner = squares[x];
    if (winner && winner === squares[y] && winner === squares[z]) {
      console.log('게임끝');
      winnerInfo = {
        winner,
        condition: [x, y, z],
      };
      break;
    }
  }

  return winnerInfo;
}
