// 기본 객체 타입 - 객체 리터럴을 사용하여 간단히 객체 타입을 정의
const person: { name: string; age: number } = {
  name: "Alice",
  age: 30
};

// 타입 별칭 - type 키워드를 사용하여 객체 타입에 대한 별칭을 정의
type Animal = {
  species: string;
  age: number;
};

const dog: Animal = {
  species: "Dog",
  age: 5
};

// 인터페이스 - 인터페이스를 사용하여 객체 타입을 정의하며, 확장이 가능
interface Vehicle {
  brand: string;
  model: string;
  year: number;
}

const car: Vehicle = {
  brand: "Toyota",
  model: "Camry",
  year: 2021
};

// 선택적 속성 - 선택적 속성을 사용하여 객체의 일부 속성이 없을 수도 있음을 정의
interface User {
  username: string;
  email?: string; // email은 선택적 속성
}

const user1: User = {
  username: "john_doe"
};

const user2: User = {
  username: "jane_doe",
  email: "jane@example.com"
};

// 인덱스 시그니처 - 인덱스 시그니처를 사용하여 동적인 키를 가진 객체 타입을 정의
interface Dictionary {
  [key: string]: string; // 모든 키는 문자열이고 값은 문자열
}

const dict: Dictionary = {
  hello: "안녕하세요",
  goodbye: "안녕히 가세요"
};

// 확장 가능한 객체 타입 - 기존 객체 타입을 확장하여 새로운 타입을 정의
interface Employee {
  id: number;
  name: string;
}

interface Manager extends Employee {
  department: string;
}

const manager: Manager = {
  id: 1,
  name: "Alice",
  department: "HR"
};

// 유니언 타입을 가진 객체 - 유니언 타입을 사용하여 객체가 두 가지 형태 중 하나를 가질 수 있도록 정의
type ApiResponse =
  | { status: "success"; payload: string }
  | { status: "error"; errorMessage: string };

const successResponse: ApiResponse = {
  status: "success",
  payload: "Operation completed successfully."
};

const errorResponse: ApiResponse = {
  status: "error",
  errorMessage: "An error occurred."
};