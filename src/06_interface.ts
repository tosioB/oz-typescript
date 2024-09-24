// 기본 문법 - 인터페이스는 객체의 속성과 메서드를 정의
interface UserProfile {
  id: number;
  name: string;
  isPremium: boolean;
  greet(): string;
}

const newUser: UserProfile = {
  id: 1,
  name: "Alice",
  isPremium: true,
  greet() {
    return `Hello, ${this.name}!`;
  }
};

console.log(newUser.greet()); // 결과: "Hello, Alice!"

// 타입 Alias vs 인터페이스
// 타입 Alias는 다양한 타입을 정의하고
// 인터페이스는 객체 형태를 정의하며 확장이 가능
type UserAlias = {
  id: number;
  name: string;
};

interface UserInterface {
  id: number;
  name: string;
}

interface ExtendedUser extends UserInterface {
  // 확장 예시
  isPremium: boolean;
}

const extendedUser: ExtendedUser = {
  id: 2,
  name: "Charlie",
  isPremium: false
};

console.log(extendedUser); // 결과: { id: 2, name: "Charlie", isPremium: false }

// readonly & optional property - 읽기 전용 속성은 수정할 수 없고, 선택적 속성은 생략할 수 있어 유연성을 제공
interface Product {
  readonly id: number; // 읽기 전용
  name: string;
  price?: number; // 선택적 속성
}

const product: Product = {
  id: 1,
  name: "Laptop"
  // price는 선택적 속성이라 생략 가능
};

console.log(product); // 결과: { id: 1, name: "Laptop" }
// product.id = 2; // 오류: 읽기 전용 속성입니다.

// 메서드/함수 타입 - 인터페이스 안에 메서드를 정의해 객체의 기능을 명세할 수 있다.
interface Calculator {
  add(a: number, b: number): number;
}

const simpleCalculator: Calculator = {
  add(a, b) {
    return a + b;
  }
};

console.log(simpleCalculator.add(5, 3)); // 결과: 8

// 확장 및 조합 - 인터페이스는 다른 인터페이스를 확장하여 재사용성과 복잡한 구조를 쉽게 관리할 수 있다.
interface Person {
  name: string;
  age: number;
}

interface Staff extends Person {
  employeeId: number;
}

const staffMember: Staff = {
  name: "Bob",
  age: 25,
  employeeId: 123
};

console.log(staffMember); // 결과: { name: "Bob", age: 25, employeeId: 123 }
