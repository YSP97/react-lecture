// --------------------------------------------------------------------------
// ✅ 명령형 프로그래밍
// --------------------------------------------------------------------------
// - [x] 체크박스 인풋이 체크 상태이면, 버튼은 활성 상태입니다.
// - [x] 체크박스 인풋이 체크 상태가 아니면, 버튼은 비활성 상태입니다.
// - [x] 버튼 상태 변경에 따라 레이블은 "활성 상태", "비활성 상태"로 변경되어야 합니다.
// --------------------------------------------------------------------------

// 대상 찾기
const container = document.querySelector("#imperative-programming");
const checkbox = container.querySelector(
  '[type="checkbox"]'
) as HTMLInputElement;
const button = container.querySelector("button");

// 이벤트 핸들러 작성
function handleChange(e) {
  const { checked } = e.target;
  if (checked) {
    button.removeAttribute("disabled");
    button.textContent = "활성 상태";
  } else {
    button.setAttribute("disabled", "true");
    button.textContent = "비활성 상태";
  }
}
// 찾은 대상에 이벤트 연결
checkbox.addEventListener("change", handleChange);
