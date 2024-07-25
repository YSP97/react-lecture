/**@type {(list: any[]) => any[]} */
// 배열을 랜덤하게 섞는 함수
export function shuffle(list) {
  let _ = [...list];
  for (let i = _.length - 1; i > 0; --i) {
    let k = Math.floor(Math.random() * (i + 1));
    [_[k], _[i]] = [_[i], _[k]];
  }
  return _;
}
