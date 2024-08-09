// --------------------------------------------------------------------------
// ✅ 틱택토 게임 만들기 (Squares 컴포넌트)
// --------------------------------------------------------------------------
// - [x] squares 배열 데이터를 게임의 상수로 설정합니다.
// - [x] squares 배열 데이터의 초기 상태 값은 9개의 `null`로 구성합니다.
// - [x] squares 배열 데이터 모듈을 불러온 후, 순환해 Sqaure 컴포넌트를 리스트 렌더링 합니다.
// --------------------------------------------------------------------------

import { useState } from 'react';
import {
  INITIAL_SQUARES,
  Player,
  PLAYER_COUNT,
  checkWinner,
  WINNERS_COLOR,
} from '@/tic-tac-toe/constants';
import S from './Squares.module.css';
import Square from '../Square/Square';

// 상태를 가지는(Stateful) 컴포넌트
function Squares() {
  // [게임 상태] --------------------------------------------------------------

  // 게임판(9개의 말판) 상태를 나타내는 리액트의 상태 선언
  const [squares, setSquares] = useState(INITIAL_SQUARES);

  // [게임 상태 업데이트 기능] ----------------------------------------------------

  // 게임을 진행하는 함수
  const handlePlayGame =
    (index) => /* onPlay 속성에 연결된 이벤트 핸들러 */ () => {
      // 게임 상태 변경 -> 리액트에게 렌더 트리거(요청) -> 리액트는 컴포넌트 다시 렌더링 -> 렌더 트리
      // -> 리액트 돔 이전 렌더 트리 현재 렌더 트리 비교 -> 차이가 발견 -> 실제 DOM 커밋(변경된 부분만 패치)
      // console.log(`play game #${index}`);
      setSquares((prevSquares) => {
        // 다음 번 컴포넌트 렌더링 시, 전달(계산)된 현재 시점의 상태: 이전 스퀘어 집합을 순환해서
        const nextSquares = prevSquares.map((square, squareIndex) => {
          // 개별 스퀘어의 인덱스와 사용자 행동에 따라 선택된 인덱스를 비교한다.
          // 만약 그 값이 동일하다면?
          // 동일하지 않은 경우 그냥 이전 값을 반환한다.
          return squareIndex === index ? currentPlayer : square;
        });

        // console.log({ '이전상태:': squares });
        // console.log({ '다음상태:': nextSquares });

        // 반환한 값이 다음 번 렌더링에서의 (스냅샷) 상태 값
        return nextSquares;
      });
    };

  // [게임 파생된 상태] ----------------------------------------------------------

  // 게임 순서 (0, 1, 2, 3, ...)
  const gameIndex = squares.filter(Boolean).length;

  // 현재 게임 플레이어 ([0] Player.ONE ↔ [1] Player.TWO)
  // 첫번째 플레이어의 턴인가요?
  const isPlayerOneTurn = gameIndex % PLAYER_COUNT === 0;
  // 첫번째 플레이어의 턴이면 Player.ONE 아니면 Player.TWO
  const currentPlayer = isPlayerOneTurn ? Player.ONE : Player.TWO;

  const winnerInfo = checkWinner(squares);
  console.log('승자는?', winnerInfo);
  // console.log('렌더링\n\n', { squares, gameIndex, currentPlayer });

  return (
    <div className={S.component}>
      {/* 리액트 (JSX) 마크업 : 리스트 렌더링 */}
      {squares.map((square, index) => {
        // 배경 색칠을 위한 스타일 객체 정의
        const winnerSyles = {
          backgroundColor: null,
        };
        if (winnerInfo) {
          const {
            condition: [x, y, z],
          } = winnerInfo;

          // 색칠하기
          if (index === x || index === y || index === z) {
            console.log('색칠하도록');
            winnerSyles.backgroundColor = WINNERS_COLOR;
          }
        }

        return (
          <Square
            key={index}
            onPlay={handlePlayGame(index)}
            style={winnerSyles}
          >
            {square}
          </Square>
        );
      })}
    </div>
  );
}

export default Squares;
