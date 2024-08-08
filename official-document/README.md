# React + Vite


`sudo npm install -g pnpm`
`npm create vite official-document --template react`

- [리액트 공식문서](https://ko.react.dev/versions)

## 공식문서 읽기
### UI 표현하기
#### 컴포넌트 사용하기
#### 컴포넌트 import 및 export 하기
#### JSX로 마크업하기
- 기존에 작성된 HTML을 JSX로 바꾸려면 [converter](https://transform.tools/html-to-jsx) 사용하기
#### 중괄호가 있는 JSX 안에서 자바스크립트 사용하기
#### 컴포넌트에 props 전달하기
#### 조건부 렌더링
    - 삼항 조건 연산자 (? :)
    - 논리 AND 연산자 (&&)
- 요약
    React에서 JavaScript로 분기 로직을 제어합니다.
    조건부로 if 문과 함께 JSX 식을 반환할 수 있습니다.
    조건부로 일부 JSX를 변수에 저장한 다음 중괄호를 사용하여 다른 JSX에 포함할 수 있습니다.
    JSX에서 {cond ? <A /> : <B />}는 “cond이면 <A />를 렌더링하고, 그렇지 않으면 <B />를 렌더링합니다.” 를 의미합니다.
    JSX에서 {cond && <A />}는 “cond이면, <A />를 렌더링하되, 그렇지 않으면 아무것도 렌더링하지 않습니다.” 를 의미합니다.
    위 예시는 흔한 방법이지만, if를 선호한다면 사용하지 않아도 됩니다.
