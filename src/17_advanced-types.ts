/** Advanced Types(고급 타입)
 * 고급타입이란 기본 타입을 확장하여 복잡한 타입 관계와 구조를 표현할 수 있게 해주는 다양한 타입 기능
 *
 * - 교차 타입
 * - 조건부 타입
 * - keyof 연산자 타입
 * - 매핑 타입
 */

// 교차 타입 - 두개 타입을 결합해서 하나의 타입을 만든다.
type A = { name: string };
type B = { age: number };

type Person2 = A & B;

const person2: Person2 = {
  name: "John",
  age: 33
};

type UserBase = { id: number };
type WithName = { name: string };
type WithEmail = { email: string };
type WithAge = { age: number };

type GuestUser = UserBase & WithName;
type User2 = UserBase & WithName & WithEmail & WithAge;

const guest: GuestUser = {
  id: 100,
  name: "Paul"
};

const user3: User2 = {
  id: 100,
  name: "Paul",
  age: 30,
  email: "test@email.com"
};

// 조건부 타입 - 특정 조건에 따라 하나의 타입 또는 또 다른 타입으로 정의
// type ConditionalType = T extends U ? X : Y;
type IsNumber<T> = T extends number ? "yes" : "no";
type Result1 = IsNumber<number>; // yes
type Result2 = IsNumber<string>; // no

type JsonOrText<T extends "json" | "text"> = T extends "json" ? object : string;
type JsonResponse = JsonOrText<"json">; // object
type TextResponse = JsonOrText<"text">; // string

// key of 타입 연산자 - 객체 타입에서 모든 속성 이름을 문자 또는 숫자로 추출
type MyObject = {
  a: number;
  b: string;
  c: boolean;
};

type Keys = keyof MyObject; // MyObject 키를 union 타입으로 추출 - "a" | "b" | "c"

function getProp<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const obj = { x: 10, y: 20, z: 15 };
const value = getProp(obj, "y"); // 20

// mapped type(매핑 타입) - 기존 타입을 새로운 타입으로 변환
// type Mapped<T> = {
//   [P in keyof T]: T[P]
// }

type OptionalType<T> = {
  [P in keyof T]?: T[P];
};

type ReadonlyType<T> = {
  readonly [P in keyof T]?: T[P];
};

type UserType = {
  id: number;
  name: string;
  age: number;
  email: string;
};

// UserType의 모든 속성을 선택적으로 변환
type OptionalUserType = OptionalType<UserType>;

// UserType의 모든 속성을 읽기 전용으로 변환
type ReadonlyUserType = OptionalType<UserType>;
