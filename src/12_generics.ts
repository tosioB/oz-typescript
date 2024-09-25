/** Generics
 * 함수, 클래스, 인터페이스등에 타입을 매개변수 처럼 사용할 수 있게 한다.
 * 다양한 타입의 데이터를 처리할 수 있는 범용적인 패턴 제공
 * 유사한 기능을 하는 함수, 클래스등을 하나로 통합
 *
 * 타입 변수: 타입자리에 대체될 타입을 나타내는 변수. 제네릭 함수, 클래스등 정의할 때 지정되며
 * 실제 사용 시에 구체적인 타입으로 대체된다.
 *
 * 장점 - 코드 재사용성 증가, 유연성과 확장성, 명시적인 타입 표현
 * 단점 - 러닝 커브, 복잡성 증가, 컴파일 시간 증가
 */

// <T>

// function genericFunction<T>(arg: T) {
//   return arg;
// }

// interface GenericInterface<T> {}

// class GenericClass<T> {}

// Array<T>
let numbers2: Array<number> = [1, 2, 3, 4, 5];
let strings2: Array<string> = ["a", "b", "c", "d", "e"];

const div = document.querySelector<HTMLDivElement>("#myDiv");
const button2 = document.querySelector<HTMLButtonElement>("#myButton2");

button2?.click();

function getFirstelement<T>(arr: T[]): T | undefined {
  if (!arr.length) {
    return undefined;
  }

  return arr[0];
}

// function getFirstStringElement(arr: string[]) {
//   if (!arr.length) {
//     return undefined;
//   }

//   return arr[0];
// }

const firstNumber = getFirstelement(numbers2);
const firstString = getFirstelement(strings2);

interface Dict<T> {
  [key: string]: T;
}

let strObj: Dict<string> = {
  name: "Elliot"
};

let numObj: Dict<number> = {
  age: 30
};

interface Entry<K, V> {
  key: K;
  value: V;
}

let entry: Entry<string, number> = {
  key: "age",
  value: 30
};

let entry2: Entry<number, string[]> = {
  key: 1,
  value: ["red", "green", "blue"]
};
