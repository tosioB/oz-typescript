/** Type Assertion(타입 단언)
 * 타입 단언이란 직접 컴파일러에게 변수나 객체가 가진 타입에 대해 알리는 방식
 * 개발자가 해당 타입에 대해 더 많은 정보를 가지고 있는 경우
 */

// 표현식 as 지정할 타입
const someValue2: unknown = "Hey there";

// const len = someValue2.length; // Error
const len = (someValue2 as string).length; // 21

const button = document.getElementById("button") as HTMLButtonElement;

if (button) {
  button.disabled = false;
}

if (button instanceof HTMLButtonElement) {
  button.disabled = false;
}
