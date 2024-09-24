// 기본 문법
let myTuple: [string, number, boolean];

myTuple = ["Hello", 15, false];
myTuple = ["Hello", true, 1]; // Error
myTuple = ["Hello", 15]; // Error

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
coords.push([false, "1"]); // Error

for (const [lat, lng] of coords) {
  console.log(lat, lng);
}
