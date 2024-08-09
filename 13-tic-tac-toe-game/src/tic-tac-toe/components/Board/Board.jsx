import Status from '../Status/Status';
import Squares from './../Squares/Squares';
import S from './Board.module.css';
export default function Board() {
  return (
    <div className={S.component}>
      <Status />
      <Squares />
    </div>
  );
}
