// 공백을 하이픈('-')으로 대체하는 함수
export function convertSlug(text) {
  return text.replace(/\s+/g, '-');
}
