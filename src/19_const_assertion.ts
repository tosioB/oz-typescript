/** const assertion(상수 단언)
 * 확잘할 수 없는 리터럴 타입의 변수를 생성
 * 애플리케이션 전역에 걸쳐 올바른 값 사용을 보장
 * 컴파일러의 정확한 타입 추론을 돕는다
 */

// 객체
// const objName = {} as const;
const book2 = {
  title: "책이름",
  author: "저자"
} as const;

// book2.title = '저자2' // Error

// 배열
// const arrName = [] as const;
const nums2 = [1, 2, 3, 4, 5] as const;

// nums2.push(6) // Error

const config = {
  server: "https://api.somedomain.com",
  port: 8000,
  version: 2
} as const;

// config.server = "https:" // Error

// 주문 시스템의 상태정보
export const statusCodeMap = {
  101: "주문완료",
  102: "대기중",
  103: "완료"
} as const;

export type statusCodeKeys = keyof typeof statusCodeMap;

function handleStatus(statusCode: statusCodeKeys) {
  const message = statusCodeMap[statusCode];
  // UI 업데이트 또는 로직처리
}
