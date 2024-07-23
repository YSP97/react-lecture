// --------------------------------------------------------------------------
// rest parameters

function _sum() {
  console.log(Array.isArray(arguments), arguments.length);
  const numbers = Array.from(arguments); // Array.from 배열로 바꿔줌
  console.log(Array.isArray(numbers), numbers.length);
  return numbers.reduce((result, number) => result + number, 0); // 배열이니까 reduce 메서드 사용 가능
}

// 🔶 나머지 매개변수를 사용해 sum 함수 코드 로직을 다시 작성합니다.
// 참고: https://mzl.la/43Ro9yp
const sum = (...numbers) => {
  console.log(Array.isArray(numbers)); // rest parameters는 배열이다!
  console.log(numbers);
  // console.log(arguments);
  return numbers.reduce((total, number) => total + number);
};

let result1_1 = _sum(2, 3, 9, 12, 105); // arguments
let result1_2 = sum(2, 3, 9, 12, 105);
console.log(result1_1);
console.log(result1_2); // 함수는 암묵적으로 undefinded 반환
console.log(Object.is(result1_1, result1_2)); // Object.is: 두 가지가 같은 타입인지 확인

let result2_1 = _sum(90, 418, -7);
let result2_2 = sum(90, 418, -7);
console.log(Object.is(result2_1, result2_2));
