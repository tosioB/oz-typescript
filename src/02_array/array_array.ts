// 일반 배열: 2차원 배열 (number[][] 타입)
let arrays: number[][] = [
  [1, 2],
  [3, 4]
];

// 정상 작동: 배열 추가
arrays.push([5, 6]);

// 에러 발생: 'number' 타입을 추가하려고 함
// arrays.push(7); // number 타입 (오류)

// 제너릭 배열: Array<number[]> 타입
let arraysGeneric: Array<number[]> = [
  [1, 2],
  [3, 4]
];

// 정상 작동: 배열 추가
arraysGeneric.push([5, 6]);

// 에러 발생: 'string' 타입을 추가하려고 함
// arraysGeneric.push("seven"); // string 타입 (오류)
