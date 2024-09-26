/** Utillity Types(유틸리티 타입)
 * Partial<T> - 타입 T의 모든 속성을 선택적으로 만든다
 * Readonly<T> - 타입 T의 모든 속성을 읽기 전용으로 만든다
 * Pick<T, K> - 타입 T에서 속성 K 만을 선택하여 타입을 생성
 * Omit<T, K> - 타입 T에서 속성 K를 제외한 타입 생성
 * Record<K, T> - K 타입의 키와 T 타입의 값으로 구성된 타입을 생성
 * Parameters<T> - 함수 타입 T의 매개변수 타입들을 튜플 타입으로 추출
 */

// Partial<T> - 타입 T의 모든 속성을 선택적으로 만든다
type User3 = {
  id: number;
  name: string;
  email: string;
};

type PartialUser = Partial<User3>;

type Product2 = {
  id: number;
  price: number;
};

type PartialProduct = Partial<Product2>;

const product6: PartialProduct = {};

// Readonly<T> - 타입 T의 모든 속성을 읽기 전용으로 만든다
type User4 = {
  id: number;
  name: string;
};

const user4: Readonly<User4> = {
  id: 1,
  name: "John"
};

// user4.id = 10; // Error
// user4.name = "Amy"; // Error

// Pick<T, K> - 타입 T에서 속성 K 만을 선택하여 타입을 생성
type User5 = {
  id: number;
  name: string;
  email: string;
};

type UserWithNameOnly = Pick<User4, "name">;

const user5: UserWithNameOnly = {
  name: "Lee"
};

// Omit<T, K> - 타입 T에서 속성 K를 제외한 타입 생성
type Product3 = {
  id: number;
  name: string;
  price: number;
  uniqueCode: number;
};

type ProductWithOmit = Omit<Product3, "uniqueCode" | "price">;

// Record<K, T> - K 타입의 키와 T 타입의 값으로 구성된 타입을 생성
type Country2 = "South Korea" | "United States" | "Canada";
type Capital = string;

type CountryCapitals = Record<Country2, Capital>;

const capitals: CountryCapitals = {
  "South Korea": "Seoul",
  "United States": "Washington D.C",
  Canada: "Ottawa"
};

type CountryInfo = {
  capital: string;
  population: number;
  continent: string;
};

type CountryInfoMap = Record<Country2, CountryInfo>;

const countryInfo: CountryInfoMap = {
  "South Korea": {
    capital: "Seoul",
    population: 51_000_000,
    continent: "Asia"
  },
  "United States": {
    capital: "Washington D.C",
    population: 331_000_000,
    continent: "Asia"
  },
  Canada: {
    capital: "Ottawa",
    population: 51_000_000,
    continent: "Noth America"
  }
};

// Parameters<T> - 함수 타입 T의 매개변수 타입들을 튜플 타입으로 추출
type SomeFunction = (id: number) => void;
type Param = Parameters<SomeFunction>;

function someFunction(...param: Param) {
  const [id] = param;
}
someFunction(100);

type SaveUser = (name: string, age: number) => void;
type Params = Parameters<SaveUser>;

function saveUser(...params: Params) {
  const [name, age] = params;
}

saveUser("David", 32);
