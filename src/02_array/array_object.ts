// 일반 배열: 객체 배열 ({ name: string } 타입)
let objects: { name: string }[] = [{ name: "Alice" }, { name: "Bob" }];

// 정상 작동: 객체 추가
objects.push({ name: "Charlie" });

// 에러 발생: 'number' 타입을 추가하려고 함
// objects.push({ age: 30 }); // object 타입 (오류)

// 제너릭 배열: Array<{ name: string }> 타입
let objectsGeneric: Array<{ name: string }> = [{ name: "Alice" }];

// 정상 작동: 객체 추가
objectsGeneric.push({ name: "Bob" });

// 에러 발생: 'string' 타입을 추가하려고 함
// objectsGeneric.push("Charlie"); // string 타입 (오류)
