/** Type Narrowing
 * Type Narrowing이란 해당 변수의 가능한 타입을 보다 구체적으로 좁혀나가는 과정
 * typeof, instanceof, 동일성, 사용자 정의 가드 등을 사용
 * 함수가 여러 타입의 매개 변수를 받아 각 타입에 맞는 적절한 처리를 할 때 주로 사용
 */

// typeof
type Id = number | string;

let id: Id = 1;

if (typeof id === "string") {
  // 문자열 ID 경우 로직 처리
}

function getId(id: Id) {
  if (typeof id === "number") {
    return id;
  }

  return Number(id);
}

getId(1);
getId("1");

// 동일성 좁히기
type Option = "on" | "off";

function power(option: Option) {
  if (option === "off") {
    console.log("power off");
  } else {
    console.log("power on");
  }
}

power("on");
power("off");

// in 키워드 사용
type IOS = { iMessage: () => void };
type android = { message: () => void };

function sendMessage(os: IOS | android) {
  if ("iMessage" in os) {
    os.iMessage(); // iOS로 좁혀진다
  } else {
    os.message(); // android 케이스
  }
}

sendMessage({
  iMessage: () => {
    console.log("sending iMessage");
  }
}); // iOS 타입

sendMessage({
  message: () => {
    console.log("sending message");
  }
}); // android 타입

// instanceof narrowing
class ApiResponse2 {
  data: any;
}
class ErrorResponse2 {
  message: string | undefined;
}

async function handleApiResponse(response: any) {
  if (response instanceof ApiResponse2) {
    // 데이터 처리
  } else if (response instanceof ApiResponse2) {
    // 에러 처리
  }
}

const apiResponse = new ApiResponse2();
const errorResponse2 = new ErrorResponse2();

handleApiResponse(ApiResponse2);
handleApiResponse(ErrorResponse2);

// 타입 가드 (type predicates)
function isErrorResponse(
  response: ApiResponse2 | ErrorResponse2
): response is ErrorResponse2 {
  return (response as ErrorResponse2).message !== undefined;
}

const response = { message: "error.." };
if (isErrorResponse(response)) {
  // 에러 케이스
  console.log(response.message);
}

// 식별 가능한 유니언 타입
type SuccessResponse = {
  type: "success";
  data: any;
};

type ErrorResponseType = {
  type: "error";
  message: string;
};

type ApiResponseType = SuccessResponse | ErrorResponseType;

function handleResponse(response: ApiResponseType) {
  if (response.type === "success") {
    console.log("data:", response.data);
  } else {
    console.log(response.message);
  }
}
