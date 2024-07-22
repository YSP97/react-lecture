// --------------------------------------------------------------------------
// New operators (nullish, optional chaining)
// - null, undefined 처리 조건 연산자 활용
// ?? : null, undefined인지 아닌지 조건 처리
// - 선택적 연결 구문 활용
// --------------------------------------------------------------------------

function nullish() {
  let value = 0; // 개발자가 의도한 값

  let result = value || 100;
  console.log({ "||": result });

  // React Library
  // nullish Web Native
  function isNullOrUndefined(value) {
    return value === null || value === undefined ? true : false;
  }

  result = !isNullOrUndefined(value) ? value : 100;
  console.log({ isNullOrUndefined: result });

  // 🔶 null 병합 연산자 코드를 작성합니다.
  // 참고: https://mzl.la/3vQUYin | https://mzl.la/3PXiOQ9

  result = value ?? 100;
  console.log({ "??": result });
}

// 선택적 연결
function optionalChaining() {
  const topic = {
    _title: "매년 업데이트 되는 ECMAScript",

    //Getter: get Title
    getTitle() {
      return this._title;
    },
    //Setter: set Title
    setTitle(value) {
      this._title = value;
    },
  };
  // 정확하게 객체인 topic만!!
  if (topic && typeof topic === "object" && !Array.isArray(topic)) {
    let title, name;

    if (typeof topic.getTitle === "function") {
      title = topic.getTitle();
    }

    if (typeof topic.getName === "function") {
      name = topic.getName();
    }

    console.log({ titleValue: title });
    console.log({ nameValue: name });
  }

  // 🔶 optional chaining 코드를 사용해 조건 처리하세요.
  // optional chaining: 위처럼 장황한 코드 필요 X, 오류 발생 위험 줄임
  // 참고: https://mzl.la/3xx6Arc

  console.log(topic?.getTitle?.());
  console.log(topic?.getName?.());
}

function run() {
  nullish();
  optionalChaining();
}

run();
