import { func, node, object } from 'prop-types';
import S from './Square.module.css';

Square.propTypes = {
  children: node,
  onPlay: func,
  style: object,
};

export default function Square({ children, onPlay, style }) {
  const isDisabled = !!children;
  return (
    <button
      className={S.component}
      disabled={isDisabled}
      onClick={onPlay}
      style={style}
    >
      {children}
    </button>
  );
}
