
# 리액트
- [리액트 공식 홈페이지](https://ko.legacy.reactjs.org/docs/getting-started.html)

---

### 리액트란 ?

A JavaScript library fot building user interface

사용자 인터페이스 구축을 위한 자바스크립트 라이브러리

---

## 참고글
- [2024년에 리액트 프로젝트 시작하는법](https://velog.io/@lky5697/react-starter?utm_source=substack&utm_medium=email#next와-리액트)
- [2024 리액트 라이브러리](https://ykss.netlify.app/translation/react_libraries_for_2024/?utm_source=substack&utm_medium=email#리액트를-위한-패키지-매니저)

#### 리액트 시작하기
- 라이브러리 : React
- 빌드 도구 : vite
- 프레임워크 : next.js
- 프로그래밍 언어 : typescript
- 상태관리 : Redux // -> Zustand 를 요새 많이 쓴다고함
- 패키지매니저 : npm

처음엔 무슨.. create-react-app 으로 프로젝트를 만들었는데, 만들고 보니 타입스크립트를 사용하고,,
타입스크립트로 다시 만들고 보니 create-react-app --typescript 
무슨 빌드도구 vite로 사용하고 있다해서 npm create vite@latest 로 프로젝트 만들었더니

요새는 다들 next.js 를 많이쓴단다.
npx create-next-app@latest my-next-app 로 next.js 프로젝트를 만들고 그다음에
npm init vite@latest 한담에 또 뭘해줘야한다는데 

react vite next.js typescript 로 프로젝트 만들어야하나 ,,,



### 참고 강의
- [소플 처음부터 만난 리액트](https://www.inflearn.com/course/처음-만난-리액트) (react-soaple 폴더)
- [벨로퍼트와 함꼐하는 모던 리액트](https://react.vlpt.us) (react-vlpt 폴더)
  - styling-with-sass : 2. 리액트 컴포넌트 스타일링 하기 with Sass
  - todo-list : 3. todo 리스트 만들기
  - api-integrate : 4. api 연동 (axios)




### 리액트 시작하기


node.js 설치 : https://nodejs.org/en
```

    $ node --version
    v20.13.1

    $ npm --version
    10.5.2

    $ npx create-react-app [프로젝트 이름]
    
    $ npm start
```
---

리액트 시작하기전 !

- 인텔리제이에 깔아둬야할 플러그인 

  - [React snippets](https://plugins.jetbrains.com/plugin/10113-react-snippets)

    플러그인 - > 라이브 템플릿 -> React

- 크롬 확장 프로그램 
  - [React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)






---
특이점

    function UserList(users) { 
        return (
            <div>{users.map(user => (
                <User user={user} key={user.id}></User>
            ))}
            </div>
        );
    }

이렇게 쓰먄 에러남

    function UserList({users}) {
        return (
            <div>{users.map(user => (
            <User user={user} key={user.id}></User>
            ))}
            </div>
        );
    }

users 에 {} 이렇게 씨줘야 에러가 안남


---

참고 블로그 : 
- https://velog.io/@dongdong98/React-Hook-총정리#왜-hook을-쓰면-좋은가
- https://velog.io/@gwak2837/React-Hooks의-이해

Hook 이란 ? 

함수 컴포넌트에서 React state 와 생명 주기 기능(lifecycle features)을 연동 할 수 있게 하는 함수

[Hooks API Reference](https://ko.legacy.reactjs.org/docs/hooks-reference.html)
기본 Hook
1. useState - 동적 상태 관리
2. useEffect - side effect 수행 (mount(처음나타났을때)/unmount(사라질때)/update)
3. useContext - 컴포넌트를 중첩하지 않고 전역값을 쉽게 관리
추가 Hook
4. useReducer - 복잡한 컴포넌트들의 state를 관리 - 로직 분리
5. useMemo - 연산한 값 재사용
6. useCallback - 특정 함수 재사용
7. useRef - DOM선택, Component 안에서 조회/수정 할 수 있는 변수 관리
8. useLayoutEffect
9. useDebugValue
10. useDeferredValue
11. useTraition
12. useId
13. useStncE

#### State = 상태 = 리액트의 component 의 변경 가능한 데이터
state 는 직접 수정하면 안됨

    //직접수정
    this.state  = {
        name : '이름'
    }
    //함수를 통한 수정
    this.setState = {
        name : '이름'
    }

#### useState 

```
    import {useState} from "react";
  
    function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);
    
        const increaseCount = () => setCount((count) => count + 1);
        const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));
    
        return [count, increaseCount, decreaseCount]
    
    }
    
    export default useCounter;
```



#### useReducer
reducer 는 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수입니다.

#### useState vs useReducer
컴포넌트에 관리하는 값이 딱 하나이고 그 값이 단순한 숫자, 문자열, boolean 값이라면 useSate
컴포넌트에서 관리하는 값이 여러개가 되어서 상태의 구조가 복잡해 진다면 useReducer

1일 1커밋하고픈데... 
## 라이브러리
```
 $ npm add node-sass react-icons styled-components axios classnames
 $ npm add react-bootstrap bootstrap
 $ npm add redux
 $ npm add @redux-devtools/extension
```

- [node-sass]()
- [react-icons](https://react-icons.github.io/react-icons/) : 리액트 아이콘
- [styled-components](https://styled-components.com/) : JS 안에 CSS 작성
- [classnames](https://github.com/JedWatson/classnames) :
- [axios](https://github.com/axios/axios) : API 요청
- [bootstrap](https://react-bootstrap.netlify.app/) : 부트스트랩


-[@redux-devtools/extension](https://www.npmjs.com/package/@redux-devtools/extension) : 리덕스 개발자 도구
=>https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?pli=1 
