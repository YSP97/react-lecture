import { bool } from 'prop-types';
import { CardLinkItemType } from '../types/CardLinkList';
import S from './CardLinkItem.module.css';
import VanillaTilt from 'vanilla-tilt';

const VANILLA_TILT_OPTIONS = {
  // 기울이는 방향을 반대로 변경
  reverse: true,
  // 최대 기울기 회전(도°)
  max: 15,
  // X축의 시작 기울기(도°)
  startX: 0,
  // Y축의 시작 기울기(도°)
  startY: 0,
  // 관점(perspective) 값이 낮을수록 기울기가 더 커짐
  perspective: 1000,
  // 스케일 ( 2 = 200%, 1.5 = 150% )
  scale: 1.2,
  // Enter/Exit 전환 속도
  speed: 600,
  // Enter/Exit 시 전환 설정
  transition: true,
  // "x" 또는 "y" 축 활성화 설정 (`null`일 경우 양쪽 모두 활성화)
  axis: null,
  // 종료 시, 기울기 효과를 재설정
  reset: true,
  // 종료 재설정이 [0,0](기본값) 또는 [startX, startY]로 이동하는지 여부
  'reset-to-start': true,
  // Enter/Exit 시 사용되는 이징 함수
  easing: 'cubic-bezier(.03,.98,.52,.99)',
  // "글레어(섬광)" 효과 설정
  glare: false,
  // 최대 "글레이" 불투명도 설정 (1 = 100%, 0.5 = 50%)
  'max-glare': 0.65,
  // false = VanillaTilt가 글레어 요소를 생성함
  // true = .js-tilt-glare > .js-tilt-glare-inner를 사용자가 직접 추가해야 함.
  'glare-prerender': false,
  // CSS 선택자 또는 HTML 요소 링크 마우스 이벤트 수신
  'mouse-event-element': null,
  // 장치 방향 감지 활성/비활성화
  gyroscope: true,
  // 장치 X축 각도 하한(bottom limit) → 이 각도로 회전된 장치는 마치 마우스가 요소의 왼쪽 테두리에 있는 것처럼 요소를 기울임
  gyroscopeMinAngleX: -45,
  // 장치 X축 각도 상한(top limit) → 이 각도로 회전된 장치는 마치 마우스가 요소의 오른쪽 테두리에 있는 것처럼 요소를 기울임
  gyroscopeMaxAngleX: 45,
  // 장치 Y축 각도 하한(bottom limit) → 이 각도로 회전된 장치는 마치 마우스가 요소의 위쪽 테두리에 있는 것처럼 요소를 기울임
  gyroscopeMinAngleY: -45,
  // 장치 Y축 각도 상한(top limit) → 이 각도로 회전된 장치는 마치 마우스가 요소의 아래쪽 테두리에 있는 것처럼 요소를 기울임
  gyroscopeMaxAngleY: 45,
};

CardLinkItem.propTypes = {
  item: CardLinkItemType.isRequired,
  popup: bool,
  external: bool,
};

function CardLinkItem({ item, popup = false, external = false }) {
  const { href, label, images = {} } = item;

  const cardClassNames = `${S.card} ${popup ? S.popup : ''}`.trim();

  let externalLinkProps = null;

  if (external) {
    externalLinkProps = {
      target: '_blank',
      rel: 'noreferrer noopener',
    };
  }

  // 리액트 탈출 방식(브라우저 돔에 접근하는 방식)
  // ref Callback(참조 콜백): 실제 DOM에 렌더링 된 이후 HTML 요소에 접근 가능
  // 리액트에서 렌더 트리를 생성하고 리액트 돔에서 실제 돔에 렌더링 함 -> (mount 시점)ref 콜백 함수 실행
  const refCallback = (/* domElementNode */ el) => {
    // 실제 돔 요소 접근 가능!
    // 바닐라 tilt 이펙트 적용해보자

    // Instance 반환함
    const vanillaTiltInstance = new VanillaTilt(el);
    console.log(vanillaTiltInstance);

    VanillaTilt.init(el, VANILLA_TILT_OPTIONS);
  };

  return (
    <a
      // JSX에 사용 가능한 특수한 속성: key, ref
      key={'identity'}
      ref={refCallback}
      className={S.component}
      aria-label={label}
      title={label}
      href={href}
      {...externalLinkProps}
    >
      <figure className={cardClassNames}>
        <div className={S.wrapper}>
          <img className={S.coverImage} src={images.cover} alt="" />
        </div>
        <img className={S.title} src={images.title} alt="" />
        <img className={S.character} src={images.character} alt="" />
      </figure>
    </a>
  );
}

export default CardLinkItem;