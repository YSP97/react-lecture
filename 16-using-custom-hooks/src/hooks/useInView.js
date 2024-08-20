import { useLayoutEffect, useRef, useState } from 'react';

export default function useInView() {
  const [inView, setInView] = useState(false);
  const targetRef = useRef(null);
  const rootRef = useRef(document); // root는 대상 요소의 조상 Elem 또는 Document 가능

  useLayoutEffect(() => {
    // 인터섹션 옵저버 생성하여 관찰 대상을 관찰하도록 하자!
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      console.log(entry);

      if (entry.isIntersecting) {
        console.log('현재 뷰포트 안에 진입함!');
        setInView(true);
      } else {
        console.log('현재 뷰포트 밖으로 진출함!');
      }
    });

    const { current: targetElem } = targetRef;

    if (targetElem) {
      observer.observe(targetElem);
    } else {
      console.warn('문서에 관찰할 대상 요소가 존재하지 않아요!');
    }

    return () => {
      // 인터섹션 옵저버에 의해 관찰중인 대상의 관찰 중지
      if (targetElem) {
        observer.unobserve(targetElem);
      }
    };
  }, []);

  return { inView, targetRef, rootRef };
}
