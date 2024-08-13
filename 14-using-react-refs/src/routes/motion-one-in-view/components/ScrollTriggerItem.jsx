import { exact, number, string } from 'prop-types';
import S from './ScrollTriggerItem.module.css';
import { useRef } from 'react';
import { animate, inView, timeline } from 'motion';

ScrollTriggerItem.propTypes = {
  item: exact({
    id: number.isRequired,
    image: string.isRequired,
    text: string.isRequired,
  }).isRequired,
};

function ScrollTriggerItem({ item }) {
  const articleRef = useRef(null);
  const pRef = useRef(null);

  // refCallback 이용
  const setScrollTrigger = (el) => {
    // 문서에 inView() 함수를 적용할 요소가 있을 경우
    // 스크롤 트리거 애니메이션 설정
    if (el) {
      inView(el, ({ target, isIntersecting }) => {
        // 대상에 애니메이션 적용
        // animate(target, { opacity: 1 }, { duration: 2, easing: 'ease-in-out' });
        timeline(
          [target, { opacity: [0, 1] }, { duration: 0.6 }],
          [pRef, { opacity: [0, 1], y: [20, 0] }, { duration: 0.6 }],
          {
            easing: 'ease-out',
          }
        );
      });

      // animate(
      //   pRef.current,
      //   { y: [20, 0], opacity: [0, 1] },
      //   { duration: 2, easing: 'ease-out', delay: 1 }
      // );

      // 타임라인 애니메이션 설정
    }
  };

  return (
    <article
      ref={setScrollTrigger}
      className={S.component}
      style={{ background: `url(${item.image}) no-repeat center / cover` }}
    >
      <p ref={pRef} className={S.text}>
        {item.text}
      </p>
    </article>
  );
}

export default ScrollTriggerItem;
