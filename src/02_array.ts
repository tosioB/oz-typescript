// 기본 배열 타입 - 가장 기본적인 배열 타입 정의 방법
const numberArray: number[] = [1, 2, 3, 4, 5];
const stringArray: string[] = ["apple", "banana", "cherry"];

// 제네릭 배열 타입 - Array<T> 구문을 사용하여 배열 타입을 정의
const numberArrayGeneric: Array<number> = [1, 2, 3, 4, 5];
const stringArrayGeneric: Array<string> = ["apple", "banana", "cherry"];

// 다차원 배열 - 배열 안에 배열을 포함하여 다차원 배열을 정의
const numberMatrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// 튜플 - 고정된 길이와 각 요소의 타입이 다른 배열을 정의
const personTuple: [string, number] = ["Alice", 30]; // 이름과 나이를 가진 튜플

// 선택적 요소 튜플 - 튜플에서 선택적 요소를 사용하여 일부 요소가 없어도 되는 구조를 정의
type PersonInfoTuple = [string, number?]; // 두 번째 요소는 선택적
const personInfo1: PersonInfoTuple = ["Bob"];
const personInfo2: PersonInfoTuple = ["Charlie", 25];

// 객체 배열 - 배열의 요소가 객체인 경우 타입을 정의
type PersonObject = {
  name: string;
  age: number;
};

const peopleArray: PersonObject[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 }
];

// 유니언 배열 - 배열의 요소가 여러 타입일 수 있는 경우 유니언 타입을 사용
const mixedArray: (string | number)[] = ["apple", 2, "banana", 3];
