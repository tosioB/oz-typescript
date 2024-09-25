/** Unions
 * 여러 타입 중 하나가 될 수 있는 값을 표현
 * 집합 이론의 "합집합" 과 동일한 개념
 * 서로 다른 타입의 값을 하나의 변수에 할당할 수 있으며 "|"를 사용하여 나타낸다.
 *
 * Type Narrowing: 유니언 타입의 구체적인 하위 타입을 좁혀나가는 방식(타입 좁히기 라고도 표현한다.)
 * 배열과 함께 사용: 서로 다른 타입의 요소를 포함할 수 있는 배열을 정의하여 유연성을 증가시킨다.
 * 리터럴: 제한된 값을 가진 타입(예: 특정 문자열이나 숫자의 집합)을 표현
 * Type Aliases 사용: 타입 또는 리터럴값을 결합하여 재사용 가능한 타입을 정의
 */

// 유니언 기초 - 유니언 타입은 "|" 기호를 사용하여 여러 타입을 결합할 수 있다.
function printId(id: number | string) {
  console.log(`Your ID is: ${id}`);
}

printId(101); // Your ID is: 101
printId("202"); // Your ID is: 202

// 함수 파라미터 - 유니언 타입을 함수 매개변수에 사용할 수 있다.
function logMessage(message: string | number) {
  console.log(message);
}

logMessage("Hello!"); // Hello!
logMessage(123); // 123

// True Narrowing - 유니언 타입을 사용하여 매개변수를 좁힐 수 있다. 특정 조건에 따라 타입을 좁혀서 처리할 수 있다.
function handleValue(value: number | string) {
  if (typeof value === "string") {
    console.log(`String value: ${value.toUpperCase()}`);
  } else {
    console.log(`Number value: ${value.toFixed(2)}`);
  }
}

handleValue("hello"); // String value: HELLO
handleValue(3.14); // Number value: 3.14

// 배열 사용 예시 - 여러 타입의 값을 포함하는 배열을 정의
const myArray: (number | string)[] = [1, "two", 3, "four"];

myArray.forEach((item) => {
  console.log(item);
});

// 출력: 1, two, 3, four

// 리터럴과 유니언 타입 - 리터럴 타입과 유니언을 결합하여 특정 값만 허용하는 타입을 만들 수 있다.
type Direction = "left" | "right" | "up" | "down";

function move(direction: Direction) {
  console.log(`Moving ${direction}`);
}

move("left"); // Moving left
move("up"); // Moving up
// move("forward"); // 오류 발생: Argument of type '"forward"' is not assignable

// Type Aliases와 유니언 - TypeScript에서 type 키워드를 사용하여 유니언 타입에 이름을 붙일 수 있다.
type StringOrNumber = string | number;

function display(value: StringOrNumber) {
  console.log(value);
}

display("Sample text"); // Sample text
display(42); // 42
