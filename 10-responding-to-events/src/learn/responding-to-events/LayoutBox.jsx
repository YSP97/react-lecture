import { node } from 'prop-types';

// PropTypes.node
// 리액트 컴포넌트가 반환할 수 있는 모든 타입 (element, string, number, null, undefined)
LayoutBox.propTypes = {
  children: node, // [TS] React.ReactNode
};

function LayoutBox({ children, onClick, ...restProps }) {
  console.log({ restProps });

  // jsx('div', {className: 'box', ...restProps})
  // restProps =  {style, onClick,...} 프롭스가 많으면 이게 편하다!

  const handleClick = (e) => {
    e.stopPropagation();
    onClick?.(e); // 상위에서 핸들러가 e객체를 받아서 실행시 전달해야한다.
  };
  return (
    <div className="box" onClick={handleClick} {...restProps}>
      {children}
    </div>
  );
}

export default LayoutBox;
