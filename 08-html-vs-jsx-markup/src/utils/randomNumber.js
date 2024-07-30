export function randomNumber(min = 0, max = 10) {
  if (min > max) throw new Error('max는 min 보다 커야합니다.');
  return Math.round(Math.random() * (max - min) + min);
}
