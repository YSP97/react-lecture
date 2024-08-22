export const ACTION_TYPE = {
  SIGN_IN: 'log in',
  SIGN_OUT: 'log out',
};

// 액션 크리에이터 (함수)
export const signInAction = (payload) => ({
  type: ACTION_TYPE.SIGN_IN,
  payload,
});

export const signOutAction = () => ({
  type: ACTION_TYPE.SIGN_OUT,
});

// 작업 요청(action) 알림(dispatch)이 오면 리듀서(reducer)가 일을 합니다.
// 리듀서가 하는 일은 요청을 수행해 새로운 상태(state)를 반환합니다.
const authReducer = (state, action) => {
  // 액션: 작업 요청서 action { type, payload? }
  // 요청을 식별해 기능 수행 -> 업데이트 해야 할 다음 상태 반환
  if (action.type === ACTION_TYPE.SIGN_IN) {
    return action.payload;
  }

  if (action.type === ACTION_TYPE.SIGN_OUT) {
    return null;
  }
};

export default authReducer;
