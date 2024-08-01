import { array } from '../utils/prop-types';

function RenderLists({ items /* string[], Array<string> */ }) {
  // 함수 내부에 리스트 렌더링 코드를 작성해보세요.
  const renderList = ({ reverse = false } = {}) => {
    // 리스트 렌더링 결과 반환
    // - [ ] Array.prototype.forEach? // 반환값이 없기때문에 forEach는 X
    // - [x] Array.prototype.map?

    // reverse: true인 경우 역순 정렬
    let listItems = items;
    if (reverse) {
      listItems = items.toReversed();
      // 원본배열을 훼손하지 않기때문에 reverse보다 toReversed(E5 2023 v14 추가됨)를 사용하는 것이 좋다!
    }

    return listItems.map((item) /* string */ => {
      // console.log(item);
      // JSX(React Element) Markup
      return <li key={item}>{item}</li>;
    });
  };

  return (
    <>
      <dt>리스트 렌더링(list rendering)</dt>
      <dd>
        <p>상태 메시지(status messages) 배열을 리스트 렌더링합니다.</p>
        <ul className="renderList">{renderList?.()}</ul>
      </dd>
      <dd>
        <p>상태 메시지(status messages) 배열을 역순 정렬하여 렌더링합니다.</p>
        <ul className="renderList">{renderList?.({ reverse: true })}</ul>
      </dd>
      <dd>
        <p>
          React 라이브러리(reactLibrary) 객체의 키, 값을 <q>설명 목록</q>으로 렌더링합니다.
        </p>
        <dl className="reactLibrary">{/* 여기서 설명 목록으로 리스트 렌더링 합니다. */}</dl>
      </dd>
    </>
  );
}

export default RenderLists;

RenderLists.propTypes = {
  // D.R.Y
  // Reusability
  // Mechanism
  // - [x] Function
  // - [ ] Class
  // NEEDS
  // Library (Utilities)
  // items(props, propName, componentName) {
  //   const propValue = props[propName];
  //   const propType = typeOf(propValue);

  // }
  items: array,
};
