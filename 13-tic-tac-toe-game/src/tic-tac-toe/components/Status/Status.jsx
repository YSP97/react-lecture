import { bool, string } from 'prop-types';
import S from './Status.module.css';

{
  /* <h2>승자! : 🟨</h2> */
}
{
  /* <h2>비겼어요... 😳</h2> */
}

Status.propTypes = {
  nextPlayer: string,
  winner: string,
  isDraw: bool,
};

function Status({ winner, nextPlayer, isDraw = false }) {
  // 기본적으로 다음 플레이어 표시
  let statusMessage = `다음 플레이어: ${nextPlayer}`;

  if (winner) {
    statusMessage = `WINNER! : ${winner}`;
  }

  if (isDraw) {
    statusMessage = `Draw! 비겼당👀`;
  }
  return <h2 className={S.component}>{statusMessage}</h2>;
}

export default Status;
