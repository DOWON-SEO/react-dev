# React Practice

## 1장 - 리액트 설정

-   npx 사용하여 프로젝트 생성
-   패키지 관리, chance와 luxon 설치
-   스크립트 응용
-   Typescript 함수 작성 후 export

## 2장 - 리액트의 동작 원리

-   key 속성을 통한 컴포넌트 구분
-   children 속성을 이용한 자식 요소 다루기
-   PropsWithChildren 제네릭 이용하여 chlidren 사용
-   물리 DOM과 가상 DOM에서의 이벤트 처리 차이
-   dispatch 메서드
-   이벤트 버블링이란
-   stopPropagation을 통한 이벤트 버블링 중단 - 이벤트 캡쳐링
-   input에서 onChange 이벤트 처리
-   드래그 드롭, 파일 업로드 등 기능 작성

## 3장 - 컴포넌트 CSS 스타일링

### 3-1. 아이콘, CSS 라이브러리 사용

-   Google Material Icon 패키지 설치
-   Tailwind CSS의 간단한 문법

### 3-2. CSS 적용된 컴포넌트 생성

-   Tailwind CSS 설치 위한 postcss, autoprefixer 패키지 설치
-   daisyui, @tailwindcss/line-clamp 플러그인 설치
-   Tailwind CSS 초기 설정 (tailwind.config.js)
-   Tailwind CSS 기본적인 문법
-   CSS 요소 적용된 \<Div\/\>, \<Title\/\>등 컴포넌트 생성

### 3-3. Tailwind CSS 컴포넌트 생성

-   CSS 기본 문법 학습
-   컴포넌트 생성

### 3-4 Flex 레이아웃 학습

-   flex 레이아웃 정렬과 디자인

### 3-5 daisyui 컴포넌트 학습

-   외부 컴포넌트 적용
-   컴포넌트 커스텀

## 4장 - 함수 컴포넌트와 훅의 이해

### 4-1. 처음 만나는 리액트 훅

-   훅 사용해보기
-   상태변화를 활용한 디지털 시계 컴포넌트 구현

### 4-2. useMemo와 useCallback 훅 이해

-   메모이제이션의 이해

### 4-3. useState 훅 이해

-   form, input 활용
-   객체, 배열 상태 활용
-   커스텀 훅 구현

### 4-4. useEffect와 useLayout 훅 이해

-   React의 Lifecycle 이해
-   EventListener 활용
-   Fetch 활용
-   커스텀 훅 구현

### 4-5. useRef와 useImperativeHandle 훅 이해

-   useRef를 이용하여 DOM 객체 레퍼런스
-   FileReader 클래스로 File 객체 읽기
-   forwardRef 이용하여 컴포넌트에 ref 전달
-   useImperativeHandle 이용하여 ref 전달

### 4-6. useContext 훅 이해

-   createContext, useContext 활용하여 데이터 전달
-   Provider 컴포넌트 사용
-   반응형 컴포넌트 제작

## 5장 - 상태 관리와 Redux 패키지

### 5-1. Redux 기본 개념 이해

-   Reducer, Action 이해
-   useSelector 훅 이해
-   Redux 저장소 구현
-   useReducer 훅 사용

### 5-2. 리듀서 활용

-   combineReducers() 활용한 리듀서 통합
-   Redux를 활용한 컴포넌트 구현

### 5-3. Redux 미들웨어의 이해

-   미들웨어의 개념 이해, 설정
-   로거 미들웨어 적용, 테스트
-   react-thunk 활용하여 함수로 action 호출

### 5-4. Trello 앱 칸반보드 구현

-   react-dnd, react-beautiful-dnd 패키지 활용
-   Typescript의 Record 타입으로 Entity 방식 적용
-   드래그 & 드랍으로 변경된 정보 처리

## 6장 - 리액트 라우터

### 6-1. 라우팅 기본

-   Client-Side Rendering(CSR) 원리
-   react-router-dom 패키지 사용
-   라우팅 기본 설정
-   useNavigate, useParams, useSearchParams 훅 사용

### 6-2. 라우팅 응용

-   Outlet 컴포넌트 활용한 레이아웃 설정
-   useResolvedPath, useMatch 훅 사용

### 6-3. 비공개 라우트 구현

-   useAuth 커스텀 훅 구현
-   특정 조건에 따른 컴포너트 라우팅 구현

## 7장 - MongoDB 사용, API서버와 연동

### 7-1. MongoDB 기초

-   MongoDB 기초 문법
-   연산자와 정규식

### 7-2. MongoDB - Node.js 연동

-   mongodb 패키지 적용
-   DB 조작 메소드 사용
-   Node.js 환경에서의 DB 테스트 구현

### 7-3. Express REST API 서버 구축

-   Express Middleware, Router 사용
-   CRUD 구현 (MongoDB)
-   클라이언트 구현 & REST API 호출

### 7-4. JWT 활용한 회원 인증 기능 구현

-   jwt 패키지 활용하여 토큰 발급, 검증 구현
-   로그인 여부 확인절차 REST API로 구현
