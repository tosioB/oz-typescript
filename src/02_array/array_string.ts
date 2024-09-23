// 일반 배열: string 타입 배열
let strings: string[] = ["a", "b", "c"];

// 정상 작동: 문자열 추가
strings.push("d");

// 에러 발생: 'number' 타입을 추가하려고 함
// strings.push(1); // number 타입 (오류)

// 제너릭 배열: Array<string> 타입 배열
let stringsGeneric: Array<string> = ["a", "b", "c"];

// 정상 작동: 문자열 추가
stringsGeneric.push("d");

// 에러 발생: 'number' 타입을 추가하려고 함
// stringsGeneric.push(1); // number 타입 (오류)
