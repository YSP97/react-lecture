import { useEffect, useRef, useState } from 'react';
import { animate, spring } from 'motion';
import { getRandomMinMax } from '@/utils';
import S from './Peekaboo.module.css';
import useStateWithCallback from '@/hooks/useStateWithCallback';
import useInView from '@/hooks/useInView';

function Peekaboo() {
  const [sections] = useState(Array(9).fill(null));

  const [, setPeekaboo] = useStateWithCallback(false, (nextPeekaboo) => {
    const peekabooCharacter = peekabooRef.current;

    if (nextPeekaboo) {
      animate(
        peekabooCharacter,
        { x: [1000, 0], opacity: [0, 1] },
        {
          delay: 0.5,
          easing: spring({ stiffness: 800, damping: 15, mass: 2 }),
        }
      );
    } else {
      animate(peekabooCharacter, { x: [0, 1000], opacity: [0, 1] });
    }
  });
  const peekabooRef = useRef(null);

  const renderPeekaboo = (idx) =>
    idx === randomIndex ? (
      <span ref={peekabooRef} className={S.peekaboo}>
        👻
      </span>
    ) : null;

  const [randomIndex] = useState(() => {
    const min = 1;
    const max = sections.length;
    const randomIndex = getRandomMinMax(min, max);

    return randomIndex;
  });

  useEffect(() => {
    const targetIndex = randomIndex - 1;
    const targetSectionElements = Array.from(sectionsRef.current.values()); // Map으로 저장된 sectionsRef.current를 배열로 변환
    const targetSectionElement = targetSectionElements.at(targetIndex);

    const intersectionObserver = new IntersectionObserver((entries) => {
      const entry = entries[0]; // entries: 관찰 중인 요소들의 교차 상태 정보를 담은 배열
      console.log(entries);

      if (entry.isIntersecting) {
        setPeekaboo(true);
      } else {
        setPeekaboo(false);
      }
    });

    intersectionObserver.observe(targetSectionElement); // 관찰

    return () => {
      intersectionObserver.unobserve(targetSectionElement); // 관찰 중지
    };
  }, [randomIndex, setPeekaboo]);

  const sectionsRef = useRef(null);

  const getSectionMap = () => {
    if (!sectionsRef.current) {
      sectionsRef.current = new Map();
    }
    return sectionsRef.current;
  };

  const collectSections = (key, sectionElement) => {
    // key: index 인수로 전달받는 매개변수
    // sectionElement: ref에 의해 React가 DOM 요소를 자동으로 전달
    const sectionMap = getSectionMap();

    if (sectionElement) {
      sectionMap.set(key, sectionElement); // section요소 리스트 렌더링한 뒤 요소를 Map 데이터에 저장
      // 이러는 이유?: 각 섹션을 Map에 저장함으로써, 특정 섹션을 쉽게 찾고 조작
    } else {
      sectionMap.delete(key);
    }
  };

  return (
    <div>
      <div className={S.component}>
        {sections.map((section, index) => {
          const idx = index + 1;
          const styles = { backgroundColor: `var(--purple-${idx}00)` };
          return (
            <section
              key={index}
              ref={collectSections.bind(null, index)}
              /* collectSections는 객체X 함수임 따라서 this 없으니까 null로 설정 */
              /* 바로 실행하지 않도록 함수 실행하지 않는 코드로 작성! */
              /* 이렇게 써도 됨! (elem) => collectSections(index, elem) */
              className={S.section}
              style={styles}
            >
              {idx}
              {renderPeekaboo(idx)}
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default Peekaboo;
