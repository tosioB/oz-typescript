// 일반 배열: boolean 타입 배열
let booleans: boolean[] = [true, false];

// 정상 작동: boolean 값 추가
booleans.push(true);

// 에러 발생: 'number' 타입을 추가하려고 함
// booleans.push(0); // number 타입 (오류)

// 제너릭 배열: Array<boolean> 타입 배열
let booleansGeneric: Array<boolean> = [true, false];

// 정상 작동: boolean 값 추가
booleansGeneric.push(false);

// 에러 발생: 'string' 타입을 추가하려고 함
// booleansGeneric.push("true"); // string 타입 (오류)
