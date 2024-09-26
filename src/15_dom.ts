/** DOM
 * DOM(문서 객체 모델 - Document Object Model)
 * HTML 요소에 접근하기 위해 사용
 * 타입스크립트 자체적으로 DOM API의 타입 제공
 */

// JS에서 제공되는 모든 DOM API를 그대로 사용
// 타입 정의 파일 제공'lib.dom.d.ts

// <a id="myLink" href="https://google.com">google</a>

const link1 = document.getElementById("myLink") as HTMLAnchorElement;
const link2 = document.querySelector("#myLink") as HTMLAnchorElement;

link1.href = "";
link2.href = "";

const img = document.createElement("img");
img.src = "";

const anchor = document.createElement("a");
anchor.href = "";

const div2 = document.querySelector("div");

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.click();
});

// event
// <div id="myDiv"></div>
const myDiv = document.getElementById("myDiv");
// myDiv?.addEventListener("click", (e: Event) => {
myDiv?.addEventListener("click", (e: MouseEvent | KeyboardEvent) => {
  // 로직 구현

  // mouse event
  if (e instanceof MouseEvent) {
    const x = e.clientX;
    const y = e.clientY;
  }

  // keyboard event
  if (e instanceof KeyboardEvent) {
    console.log(e.code);
  }
});
