import { StatusMessagesType } from '../@types/types.d';
import { statusMessages } from '../data/learn';
import { randomNumber } from '../utils';
import { string, arrayOf, oneOf } from 'prop-types';

function DataBinding({ statusMessages }) {
  // [미션] 랜덤 로직을 작성해서 임의의 상태 메시지가 표시되도록 설정합니다.
  // JavaScript 프로그래밍
  // Math.random() / Math.floor() / Math.round()

  // 리액트에서 이렇게 하는 거 아닙니다!!!
  // 전달된 props의 각 속성 타입 검사를 아래처럼 하지 않는다!
  // if (!Array.isArray(statusMessages)) {
  //   console.warn('statusMessages가 배열이 아니야! 다시 확인해~');
  //   return null;
  // }

  const statusMessage = statusMessages[randomNumber(0, statusMessages.length - 1)];

  return (
    <>
      <dt>데이터 바인딩(data binding)</dt>
      <dd>
        <p>상태 메시지(status message)를 연결해 화면에 출력합니다.</p>
        <span className="status">
          {/* statusMessage 값을 화면에 표시합니다. (랜덤 표시도 도전!) */}
          {statusMessage}
        </span>
      </dd>
    </>
  );
}

export default DataBinding;

// 컴포넌트 속성 타입 검사
// Prop Types Validation

// 리액트가 제공하는 방법
// Component.propTypes

DataBinding.propTypes = {
  // statusMessages: array.isRequired, // isRequired: 필수값 표시
  // 특정 타입으로 된 Array 타입 검사
  // [타입스크립트에서] string[] -> [prop-types에서] arrayOf(string)
  // number[] -> arrayOf(number)
  // statusMessages: arrayOf(string).isRequired, // string[]: Array인데 string으로 된 타입
  // 지정된 것 중에 하나만 가능하게 좁히기: oneOf
  // 근데 이게 유지보수에 좋지 않음;; 나중에 하나 바꾸면 다 바꾸러 가야함
  // statusMessages: arrayOf(oneOf(['⌛️ 대기', '⏳ 로딩 중...', '✅ 로딩 성공!', '❌ 로딩 실패.'])).isRequired,
  // 유지보수가 좋게 하려면 이렇게 배열을 넣는 방법이 좋을 것이다!
  statusMessages: StatusMessagesType.isRequired,
};
