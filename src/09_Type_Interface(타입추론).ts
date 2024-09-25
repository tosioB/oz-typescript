/** Type Interface(타입 추론)
 * 타입 추론이란 컴파일러가 자동으로 변수, 표현식 등의 타입을 결정하는 프로세스
 * 명시적인 타입 지정이 없더라도 컴파일러가 코드의 문맥을 기반으로 적절한 타입을 추론
 * 타입 추론을 적절히 사용하면 코드가 간결 해진다
 */

// 변수
let myNumber = 5;
let myString = "Hello";
let myBoolean = true;

myNumber = 23;
// myNumber = "15" // Error

// 함수 반환 타입
function add(x: number, y: number) {
  return x + y;
}

const n = add(10, 5);

// 배열 & 객체
let nums = [1, 2, 3, 4];
let user = { name: "Eli", age: 30 };

// nums.push("hello"); // Error
// user.push(30); // Error

let mixedValues = [1, 2, 3, "red", "green", "blue"];
