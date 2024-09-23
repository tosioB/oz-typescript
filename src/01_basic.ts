// string - 문자열 값을 나타내는 타입
const userName: string = "Alice";

// number - 모든 숫자 값을 나타내는 타입 (정수 및 부동소수점 숫자 포함)
const userAge: number = 30;

// boolean - 참(true) 또는 거짓(false) 값을 나타내는 타입
const isActive: boolean = true;

// null - 명시적으로 "값이 없음"을 나타내는 타입
const emptyValue: null = null;

// undefined - 변수가 선언되었지만 값이 할당되지 않은 상태를 나타내는 타입
let uninitialized: undefined;

// any - 어떤 타입의 값이든 허용하는 타입 (타입 검사를 우회)
let flexibleValue: any = "Hello";
flexibleValue = 42; // 숫자도 할당 가능
flexibleValue = true; // 불리언도 할당 가능

// 제네릭 타입 - 타입을 매개변수화하여 다양한 데이터 타입을 받을 수 있는 방법
function identity<T>(arg: T): T {
  return arg;
}

const stringValue = identity<string>("Hello");
const numberValue = identity<number>(42);
