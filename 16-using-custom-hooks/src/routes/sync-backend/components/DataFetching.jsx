import { useEffect } from 'react';
import { useImmer } from 'use-immer';
import { exact, string } from 'prop-types';
import S from './DataFetching.module.css';
import LoadingMessage from './LoadingMessage';
import PrintError from './PrintError';

const ENDPOINT = 'https://yunseon.pockethost.io/api/collections/food/records';

const STATE = {
  keyPoint: '상태가 복잡해지면 관리도 덩달아 어려워진다.',
  stateData: {
    one: {
      isLoading: false,
      error: null,
      data: null,
    },
  },
  two: {
    three: {
      four: {
        five: 'deep state object',
        // immer를 사용한 state 중첩 객체 변경을 위해 이런...엄청나게 중첩된 객체 만들기
      },
    },
  },
};

function DataFetching() {
  const [state, setState] = useImmer(STATE); // immer를 사용

  useEffect(() => {
    const abortController = new AbortController();

    setState((draft) => {
      draft.stateData.one.isLoading = true;
    });

    const fetchOliveOil = async () => {
      try {
        const response = await fetch(ENDPOINT, {
          signal: abortController.signal,
        });

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setState((draft) => {
          draft.stateData.one.data = responseData;
          draft.stateData.one.isLoading = false;
        });
      } catch (error) {
        if (!(error instanceof DOMException)) {
          // 특정 오류가 브라우저 DOM 과 관련된 에러가 아니라면 상태 -> 에러 처리
          // instanceof: 객체의 프로토타입 체인을 검사
          setState((draft) => {
            draft.stateData.one.error = error;
            draft.stateData.one.isLoading = false;
          });
        }
      }
    };

    fetchOliveOil();

    return () => {
      abortController.abort();
    };
  }, [setState]);

  if (state.stateData.one.isLoading) {
    return <LoadingMessage />;
  }

  if (state.stateData.one.error) {
    return <PrintError error={state.stateData.one.error} />;
  }

  return (
    <div className={S.component}>
      <ul>
        {state.stateData.one.data?.items.map?.((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetching;
