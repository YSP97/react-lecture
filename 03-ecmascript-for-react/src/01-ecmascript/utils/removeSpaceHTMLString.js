/** @type {(htmlString: string) => string} */
// html 문자열에서 공백, 줄바꿈 없애는 함수
export function removeSpaceHTMLString(htmlString) {
  return htmlString.replace(/\s+<|\n|>\s+/g, function ($1) {
    return $1.indexOf("<") > -1 ? "<" : $1.indexOf(">") > -1 ? ">" : "";
  });
}
