import { useLayoutEffect, useRef, useState } from 'react';

/** @type{ (printLog?: boolean) => { inView, targetRef, rootRef } } */
export default function useInView() {
  const [inView, setInView] = useState(false);
  const targetRef = useRef(null); // 관찰 대상 요소 참조
  const rootRef = useRef(document); // 뷰포트로 사용할 루트 요소를 참조
  // root는 대상 요소의 조상 Elem 또는 Document 가능

  useLayoutEffect(() => {
    // 인터섹션 옵저버 생성하여 관찰 대상을 관찰하도록 하자!
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]; // 가장 먼저 교차 상태가 변경된 요소에 대한 정보
      // entries: 관찰 중인 요소들의 교차 상태 정보를 담은 배열

      console.log(entry);

      if (entry.isIntersecting) {
        // 뷰포트 진입 여부 반환함 boolean
        console.log('현재 뷰포트 안에 진입함!');
        setInView(true); // 뷰포트 진입 시 inView state true
      } else {
        console.log('현재 뷰포트 밖으로 진출함!');
      }
    });

    const { current: targetElem } = targetRef;

    if (targetElem) {
      observer.observe(targetElem); // 특정 DOM 요소를 관찰 대상으로 등록
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
