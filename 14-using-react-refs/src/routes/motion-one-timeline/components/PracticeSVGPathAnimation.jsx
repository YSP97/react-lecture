// --------------------------------------------------------------------------
// ✅ Figma → SVG 패스 애니메이션
// --------------------------------------------------------------------------
// - [x] Figma를 사용해 SVG 패스 애니메이션을 적용할 아이콘 또는 다이어그램을 그립니다.
// - [x] 드로잉 시, 고려할 점
//   - [x] Stroke 속성으로 그립니다.
// - [x] 애니메이션을 적용하기 위해 고려할 점
//   - [x] strokeDasharray
//   - [x] strokeDashoffset
//   - [x] visibility
//   - [x] pathLength
// --------------------------------------------------------------------------
import { timeline } from 'motion';
import { useRef } from 'react';
import CircleLine from './CircleLine';
import S from './PracticeSVGPathAnimation.module.css';

function PracticeSVGPathAnimation() {
  const svgRef = useRef(null);

  const handleSVGPathAnimation = async () => {
    const { current: el } = svgRef;

    const [circle1, circle2] = Array.from(el.querySelectorAll('circle'));
    const line = el.querySelector('line');

    const animaionControls = timeline(
      [
        [circle1, { strokeDashoffset: [1, 0], visibility: ['visible'] }],
        [line, { strokeDashoffset: [1, 0], visibility: ['visible'] }],
        [circle2, { strokeDashoffset: [1, 0], visibility: ['visible'] }],
      ],
      {
        duration: 1.6,
        easing: 'cubic-bezier(0.79,0.14,0.15,0.86)',
      }
    );

    await animaionControls.finished;

    Array.from(el.children).forEach((child) => {
      child.style.visibility = 'hidden';
    });
  };

  return (
    <>
      <button
        type="button"
        className={S.button}
        onClick={handleSVGPathAnimation}
      >
        SVG 패스 애니메이션
      </button>

      <div className={S.component}>
        <CircleLine ref={svgRef} />
      </div>
    </>
  );
}

export default PracticeSVGPathAnimation;
