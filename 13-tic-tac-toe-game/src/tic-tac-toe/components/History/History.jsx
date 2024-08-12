import { arrayOf, func, number } from 'prop-types';
import S from './History.module.css';
import { OneOfPlayerListType } from '@/tic-tac-toe/types/type.d';

History.propTypes = {
  gameHistory: arrayOf(OneOfPlayerListType),
  gameIndex: number.isRequired,
  onTimeTravel: func,
};

function History({ gameHistory = [], gameIndex, onTimeTravel }) {
  const handleClick = (index) => () => {
    onTimeTravel(index);
  };
  return (
    <div className={S.component}>
      <ol>
        {gameHistory.map((history, index) => {
          const buttonLabel = index === 0 ? '게임 시작' : `게임 ${index}`;
          const isCurrentGameIndex = gameIndex === index;
          const isDisabled = gameIndex === index;
          return (
            <li key={index}>
              <button
                type="button"
                disabled={isDisabled}
                onClick={handleClick(index)}
              >
                {buttonLabel}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default History;
