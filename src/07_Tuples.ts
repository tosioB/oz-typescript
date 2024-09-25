/** Tuples
 * 튜플이란 고정된 크기의 배열
 * 각 요소가 다른 타입을 가질 수 있고 순서가 중요
 * 자바스크립트에는 존재 하지 않는 개념
 */

// 기본 문법
let myTuple: [string, number, boolean];

myTuple = ["Hello", 15, false];
// myTuple = ["Hello", true, 1]; // Error
// myTuple = ["Hello", 15]; // Error

// 사용 예시 1
function getUserInfo(): [number, string] {
  return [1, "Sam"];
}

const [userid, username] = getUserInfo();

// 사용 예시 2
type Flavor = string;
type Price = number;

type IceCream = [Flavor, Price];

const vanila: IceCream = ["Vanila", 500];

// 사용 예시 3
type lat = number;
type lng = number;

type coord = [lat, lng];

let coords: coord[] = [];

coords.push([36, -95]);
coords.push([38, -76]);
// coords.push([false, "1"]); // Error

for (const [lat, lng] of coords) {
  console.log(lat, lng);
}
