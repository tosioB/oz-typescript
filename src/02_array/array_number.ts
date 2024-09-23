// 일반 배열: number 타입 배열
let numbers: number[] = [1, 2, 3];

// 정상 작동: 숫자 추가
numbers.push(4);

// 에러 발생: 'string' 타입을 추가하려고 함
// numbers.push("four"); // string 타입 (오류)

// 제너릭 배열: Array<number> 타입 배열
let numbersGeneric: Array<number> = [1, 2, 3];

// 정상 작동: 숫자 추가
numbersGeneric.push(4);

// 에러 발생: 'string' 타입을 추가하려고 함
// numbersGeneric.push("four"); // string 타입 (오류)
