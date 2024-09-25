/** Function
 * 함수의 파라미터(매개변수)와 반환값에 타입 지정
 * 예상치 못한 타입의 인자가 전달되거나 타입의 값이 반환되는 것을 방지
 * 함수 시그니처로 해당 함수의 사용법을 자연스럽게 문서화
 */

/** 다양한 함수 타입 요약
 * Parameter 타입: 함수에 전달하는 매개 변수의 데이터 타입을 지정하며, 올바른 개수가 전달되는지 또한 확인한다.
 * Optioonal Parameter 타입: 함수에 필수가 아닌 선택적 매개변수를 지정할 수 있다.
 * Contextual 타입: 함수의 맥락에 따라 자동으로 타입을 추론하는 기능
 * Return 타입: 함수가 반환하는 값의 데이터 타입을 명시
 */

/** void & never
 * void 반환 타입: 함수가 명시적으로 값을 반환하지 않음을 표현
 * never 반환 타입: 함수가 값을 반환하지 않음을 보다 엄격하게 표현
 */

// Parameter(매개변수) - 함수에 전달되는 값을 정의
function sayHello(personName: string) {
  return `Hello, ${personName}!`;
}

console.log(sayHello("John")); // Hello, John!

// Default Parameter (기본 매개변수) - 매개변수에 기본값을 설정할 수 있다.
function multiplyNumbers(num1: number, num2: number = 1): number {
  return num1 * num2;
}

console.log(multiplyNumbers(5)); // 5
console.log(multiplyNumbers(5, 2)); // 10

// Optional Parameter (선택적 매개변수) - 매개변수가 선택적일 경우, 해당 매개변수에 ?를 추가
function introduce(personName: string, personAge?: number) {
  return personAge
    ? `Hello, ${personName}. You are ${personAge} years old.`
    : `Hello, ${personName}!`;
}

console.log(introduce("John")); // Hello, John!
console.log(introduce("John", 30)); // Hello, John. You are 30 years old.

// Contextual Typing (맥락적 타이핑) - 타입스크립트는 함수나 메서드에 전달된 매개변수의 타입을 주변 문맥을 통해 유추할 수 있다.
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2); // num의 타입은 number로 자동 유추됩니다.

console.log(doubled); // [2, 4, 6, 8]

// Return Type Annotation (반환 타입 주석) - 함수의 반환 타입을 명시적으로 정의
function getUserName(): string {
  return "Alice";
}

console.log(getUserName()); // Alice

// void - 함수가 값을 반환하지 않음을 나타낸다.
function printMessage(message: string): void {
  console.log(message);
}

printMessage("This is a log message."); // This is a log message.

// never - 함수가 절대로 반환하지 않음을 나타낸다.
function throwCustomError(errorMessage: string): never {
  throw new Error(errorMessage);
}

// throwCustomError("An error occurred!"); // Uncaught Error: An error occurred!
