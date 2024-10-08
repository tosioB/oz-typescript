// ----------------------------------- 1일차 ----------------------------------- //
/**
 * TypeScript 설치: npm install -g typescript
 * TypeScript 독립적 설치: npm i --save-dev typescript
 * TypeScript 버전: tsc -v
 * TypeScript 컴파일: tsc 파일명.ts
 * TypeScript 설정 파일 생성: tsc --init
 */

/** TypeScript 개요
 * TypeScript는 Microsoft에서 개발 및 유지 관리하는 오픈 소스 언어
 * 큰 스케일의 애플리케이션 개발을 위해 설계된 언어
 * Javascript에 정적 타이핑과 선택적 타입 annotation 추가
 */

/** TypeScript 특징
 * - 크로스 플랫폼: TypeScript는 JavaScript가 실행되는 모든 플랫폼에서 실행된다.
 * - 객체 지향 언어: TypeScript는 클래스, 인터페이스, 모듈과 같은 강력한 객체 지향 프로그래밍 기능을 제공한다.
 * - 정적 타입 검사: TypeScript는 정적 타이핑을 사용하며, 이는 annotation(타입 주석)을 통해 수행된다.
 * 이를 통해 컴파일 시에 타입 검사가 가능하므로, 스크립트를 매번 실행하지 않고도 코드 작성 중에 오류를 찾기 쉽다.
 * - 타입 추론: 변수가 타입 없이 선언되면, 그 값에 기반하여 타입을 추론하는 기능을 제공한다.
 * - 선택적 정적 타이핑: TypeScript의 정적 타입은 선택적이다.
 * - DOM 조작: JavaScript처럼 TypeScript도 DOM을 조작하는 데 사용할 수 있다.
 * - ES6 기능 포함: TypeScript는 클래스, 인터페이스, 화살표 함수 등 예정된 ECMAScript 2015의 대부분 기능을 포함하고 있다.
 */

/** JS/TS 차이점
 * 타입 시스템(JavaScript): 동적 타입, 변수의 타입은 런타임에 결정됨
 * 타입 시스템(TypeScript): 정적 타입, 변수의 타입은 컴파일 시점에 결정됨
 *
 * 타입 안정성(JavaScript): 타입 오류가 런타임에 발생할 수 있음(낮은 타입 안정성)
 * 타입 안정성(TypeScript): 타입 오류는 대부분 컴파일 시점에 발견됨(높은 타입 안정성)
 *
 * 컴파일(JavaScript): 인터프리터 언어로 소스 코드가 런타임에 해석됨
 * 컴파일(TypeScript): 컴파일 언어로 TypeScript 코드는 JavaScript로 컴파일되어 실행
 *
 * 학습 곡선(JavaScript): 비교적 쉬움
 * 학습 곡선(TypeScript): JavaScript에 비해 다소 어려움. 타입 시스템과 추가 문법을 학습 해야 한다.
 *
 * 인터페이스와 제네릭(JavaScript): 지원하지 않음
 * 인터페이스와 제네릭(TypeScript): 지원함
 *
 * 호환성(JavaScript): 모든 브라우저와 환경에서 기본적으로 지원됨
 * 호환성(TypeScript): JavaScript로 컴파일되어야 브라우저와 환경에서 실행될 수 있음.
 */

/** 타입 시스템(Type System)
 * 타입 시스템은 데이터의 종류를 구분하는 분류 체계를 뜻한다.
 * 이 시스템은 데이터가 메모리에 어떻게 저장되고, 어떻게 처리되어야 하는지에 대한 규칙을 정의한다.
 * 타입 시스템의 가장 큰 목적은 프로그램의 안정성과 신뢰성을 높이는 것
 *
 * - 핵심 개념1: 타입 안정성(type safety)
 * 프로그램이 예상치 못한 방식으로 데이터를 해석하는 오류를 미리 방지 하는 것을 의미
 * 예) 문자열과 숫자를 혼동하여 연산하는 것과 같은 실수를 막아준다.
 *
 * - 핵심 개념2: 타입 추론(type inference)
 * 명시적으로 타입을 지정하지 않아도 컴파일러가 자동으로 데이터의 타입을 결정하는 프로세스
 * 코드의 간결성(가독성)을 높이면서도 타입의 안정성을 유지할 수 있게 해준다.
 *
 * - 핵심 개념3: 정적 vs 동적 타입(static vs dynamic)
 * 정적 타입: 컴파일 시에 타입이 결정되며 런타임에는 변경되지 않는다.
 * 동적 타입: 런타임에 타입이 결정된다. 동적 타입 언어는 더 유연하다.
 *
 * - 핵심 개념4: 제네릭(generics)
 * 타입 매개변수를 (예 <T>) 사용하여 다양한 타입에 대해 동작할 수 있는 코드를 작성할 수 있게 해준다.
 * 코드의 재사용성을 높이고 타입 안정성을 보장한다.
 */

/** Type Annotation(타입 주석)
 * 타입스크립트 문법으로 변수, 함수, 객체 등에 명시적으로 타입을 지정하는 방법을 말한다.
 * 컴파일러는 이 정보를 바탕으로 타입 검사를 수행한다.
 */

/** TypeScript의 기본 타입
 * string
 * number
 * boolean
 * null
 * any
 * 등등...
 */

// ----------------------------------- 2일차 ----------------------------------- //
/** Array
 * 배열의 모든 요소가 "동일한" 타입을 갖도록 명시
 * 이를 통해 배열 내부 요소의 타입 안정성 제공
 * 두 가지 방법으로 표현
 * type[]
 * Array<type>
 */

/**Object
 * 객체의 각 속성(property)과 해당 속성의 타입을 명시적으로 정의
 * 타입을 사용해 객체의 형태를 표현한다.
 * 객체의 형태/구조를 보장하고 예측
 * 예상치 못한 값이 들어가는 것을 방지
 */

/** 객체의 Property 타입
 * optional: 특정 속성이 필수가 아닌 선택적임을 표현, 속성이름 뒤의 물음표("?")를 사용
 * readonly: 객체의 속성이 수정되지 않아야 할때 사용. 속성 이름 앞에 "readonly" 키워드를 추가하여 사용
 */

/** 타입 별칭
 * type 키워드를 사용하여 타입 별칭을 생성한다.
 * 객체의 구조를 정의하고 정의된 구조에 이름을 부여하는 방법
 */

/** Function
 * 함수의 파라미터(매개변수)와 반환값에 타입 지정
 * 예상치 못한 타입의 인자가 전달되거나 타입의 값이 반환되는 것을 방지
 * 함수 시그니처로 해당 함수의 사용법을 자연스럽게 문서화
 */

/** 다양한 함수 타입 요약
 * Parameter 타입: 함수에 전달하는 매개 변수의 데이터 타입을 지정하며, 올바른 개수가 전달되는지 또한 확인한다.
 * Optioonal Parameter 타입: 함수에 필수가 아닌 선택적 매개변수를 지정할 수 있다.
 * Contextual 타입: 함수의 맥락에 따라 자동으로 타입을 추론하는 기능
 * Return 타입: 함수가 반환하는 값의 데이터 타입을 명시
 */

/** void & never
 * void 반환 타입: 함수가 명시적으로 값을 반환하지 않음을 표현
 * never 반환 타입: 함수가 값을 반환하지 않음을 보다 엄격하게 표현
 */

/** Unions
 * 여러 타입 중 하나가 될 수 있는 값을 표현
 * 집합 이론의 "합집합" 과 동일한 개념
 * 서로 다른 타입의 값을 하나의 변수에 할당할 수 있으며 "|"를 사용하여 나타낸다.
 *
 * Type Narrowing: 유니언 타입의 구체적인 하위 타입을 좁혀나가는 방식(타입 좁히기 라고도 표현한다.)
 * 배열과 함께 사용: 서로 다른 타입의 요소를 포함할 수 있는 배열을 정의하여 유연성을 증가시킨다.
 * 리터럴: 제한된 값을 가진 타입(예: 특정 문자열이나 숫자의 집합)을 표현
 * Type Aliases 사용: 타입 또는 리터럴값을 결합하여 재사용 가능한 타입을 정의
 */

/** Interface
 * 객체의 구조/형태를 정의, 특정 객체가 어떤 Property, Method를 가지고 있어야 하는지를 나타낸다.
 * 클래스 객체가 지켜야할 계약 같은 역할
 *  - 어떤 구조를 가져야 하는지O
 *  - 어떻게 구조를 구현 하는지X
 * 확장 및 조합이 용이하다
 */

/** Tuples
 * 튜플이란 고정된 크기의 배열
 * 각 요소가 다른 타입을 가질 수 있고 순서가 중요
 * 자바스크립트에는 존재 하지 않는 개념
 */

/** Enum
 * 상수의 명명된 집합을 쉽게 다루기 위해 사용
 * 여러 상수 값들을 그룹화 하는 것이 목적
 * 자바스크립트에는 존재 하지 않는 개념
 */

// ----------------------------------- 3일차 ----------------------------------- //
/** Type Interface(타입 추론)
 * 타입 추론이란 컴파일러가 자동으로 변수, 표현식 등의 타입을 결정하는 프로세스
 * 명시적인 타입 지정이 없더라도 컴파일러가 코드의 문맥을 기반으로 적절한 타입을 추론
 * 타입 추론을 적절히 사용하면 코드가 간결 해진다
 */

/** Type Assertion(타입 단언)
 * 타입 단언이란 직접 컴파일러에게 변수나 객체가 가진 타입에 대해 알리는 방식
 * 개발자가 해당 타입에 대해 더 많은 정보를 가지고 있는 경우
 */

/** Classes
 * 클래스는 객체를 생성하기 위한 하나의 청사진/템플릿 역할을 한다
 * ES6에서 도입된 클래스 문법 기반
 * 생성자, 속성, 메서드로 구성
 */

/** Generics
 * 함수, 클래스, 인터페이스등에 타입을 매개변수 처럼 사용할 수 있게 한다.
 * 다양한 타입의 데이터를 처리할 수 있는 범용적인 패턴 제공
 * 유사한 기능을 하는 함수, 클래스등을 하나로 통합
 *
 * 타입 변수: 타입자리에 대체될 타입을 나타내는 변수. 제네릭 함수, 클래스등 정의할 때 지정되며
 * 실제 사용 시에 구체적인 타입으로 대체된다.
 *
 * 장점 - 코드 재사용성 증가, 유연성과 확장성, 명시적인 타입 표현
 * 단점 - 러닝 커브, 복잡성 증가, 컴파일 시간 증가
 */

// ----------------------------------- 4일차 ----------------------------------- //
/** DOM
 * DOM(문서 객체 모델 - Document Object Model)
 * HTML 요소에 접근하기 위해 사용
 * 타입스크립트 자체적으로 DOM API의 타입 제공
 */

/** Type Narrowing
 * Type Narrowing이란 해당 변수의 가능한 타입을 보다 구체적으로 좁혀나가는 과정
 * typeof, instanceof, 동일성, 사용자 정의 가드 등을 사용
 * 함수가 여러 타입의 매개 변수를 받아 각 타입에 맞는 적절한 처리를 할 때 주로 사용
 */

/** Advanced Types(고급 타입)
 * 고급타입이란 기본 타입을 확장하여 복잡한 타입 관계와 구조를 표현할 수 있게 해주는 다양한 타입 기능
 *
 * - 교차 타입
 * - 조건부 타입
 * - keyof 연산자 타입
 * - 매핑 타입
 */

/** Utillity Types(유틸리티 타입)
 * Partial<T> - 타입 T의 모든 속성을 선택적으로 만든다
 * Readonly<T> - 타입 T의 모든 속성을 읽기 전용으로 만든다
 * Pick<T, K> - 타입 T에서 속성 K 만을 선택하여 타입을 생성
 * Omit<T, K> - 타입 T에서 속성 K를 제외한 타입 생성
 * Record<K, T> - K 타입의 키와 T 타입의 값으로 구성된 타입을 생성
 * Parameters<T> - 함수 타입 T의 매개변수 타입들을 튜플 타입으로 추출
 */

/** const assertion(상수 단언)
 * 확잘할 수 없는 리터럴 타입의 변수를 생성
 * 애플리케이션 전역에 걸쳐 올바른 값 사용을 보장
 * 컴파일러의 정확한 타입 추론을 돕는다
 */

// ----------------------------------- 5일차 ----------------------------------- //
/** Error Handling
 * 타입스크립트에서의 에러 처리는 자바스크립트의 기능을 기반으로 한다.
 * 타입이 적용된 사용자 정의 에러 클래스 사용 가능
 * try-catch 사용시 catch 블럭의 에러 매개변수에 타입 지정 가능
 */

/** async operations
 * 타입스크립트에서 async 함수는 Promise를 반환
 * await 키워드를 사용하여 비동기 작업의 완료 대기
 * async 함수의 반환 타입을 Promise<T>로 지정하여 비동기 작업의 결과 타입을 명확하게 한다.
 */

/** modules
 * 타입스크립트에서 모듈은 관련된 코드가 모여 있는 하나의 파일을 의미한다.
 * 모듈은 자체의 스코프를 가지며, 모듈 안에서 정의된 변수, 함수, 클래스 등은 기본적으로 해당 모듈 내부에서만 접근 가능하다.
 * import & export 사용하는 파일은 모듈로 다룬다.
 */

/** Type declaration file(타입 선언 파일)
 * .d.ts의 확장자를 가진다.
 * 자바스크립트 내장 객체, 또는 외부 라이브러리 API등을 설명하는 파일
 * 실제 구현을 제공하지 않고도 특정 타입이 존재한다는 것을 선언
 */

/** Webpack(번들러)
 * 번들러란 웹 애플리케이션을 구성하는 asset(스크립트, 스타일시트, 이미지 등)을
 * 모두 묵어서 최적화된 여러 파일을 만들어주는 도구
 */

/** 번들러를 사용하는 이유
 * 성능 최적화: 브라우저가 파일을 더 빠르게 다운로드하고 실행할 수 있도록 도와준다.
 * 의존성 관리: 모듈 간의 의존성을 관리하고 코드를 체계적으로 구성
 * 개발 편의성: 개발 과정에서 필요한 다양한 작업(예: 자동 새로고침, 코드 분할)을 간소화한다.
 */
