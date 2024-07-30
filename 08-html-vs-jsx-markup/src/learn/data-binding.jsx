import { statusMessages } from '../data/learn';
import { randomNumber, typeOf } from '../utils';

function DataBinding({ statusMessages }) {
  // <div> 남용
  // 요소를 선택하는 최후의 수단(기준)
  // 1. HTML에는 이미 의미적인 요소가 준비되어 있음
  // 2. 의미에 맞는 요소가 존재하지 않을 때 그 때!!! 비로서 <div> 사용

  const statusMessage =
    statusMessages[randomNumber(0, statusMessages.length - 1)];

  // 리액트에서 이렇게 하는 거 아니다;;
  // if (!Array.isArray(statusMessages)) {
  //   console.warn('statusMessages가 배열이 아니야! 다시 확인해!');
  //   return null;
  // }

  return (
    <>
      <dt>데이터 바인딩(data binding)</dt>
      <dd>
        <p>상태 메시지(status message)를 연결해 화면에 출력합니다.</p>
        <span className="status">{statusMessage}</span>
      </dd>
    </>
  );
}

// JSX runtime (classic): React.createElement(React.Fragment, props, children)
// JSX runtime (automatic): jsx(React.Fragment, props)

export default DataBinding;

// 컴포넌트 속성 타입 검사
// Prop type Validation
// 리액트가 제공하는 방법: Component.propTypes

DataBinding.propTypes = {
  statusMessages(props, propName, componentName) {
    // 컴포넌트 속성의 값은?
    const propValue = props[propName];
    // 컴포넌트 속성 값의 타입은? ( 문자값으로 얻기 )
    const propType = typeOf(props);

    // 허용할 데이터 타입 이름은?
    const allowedDataType = 'array';

    // 검사 수행
    if (propType !== allowedDataType) {
      // 오류가 있으면 오류 메세지 출력하자!
      // 메세지는 `[  ] 컴포넌트에 전달된 [ ] 속성 타입은 [ ]이 요구되나, 실제 전달된 타입은 [ ]입니다.
      throw new Error(
        `${componentName} 컴포넌트 ${propName} 속성 타입은 "${allowedType}" 타입이 요구되나, 실제 전달된 타입은 "${propType}"입니다.`
      );
    }

    // 아무런 오류가 없으시 패스~
  },
};
