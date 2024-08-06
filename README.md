
# 리액트

---

### 리액트란 ?


> A JavaScript library fot building user interface
> 
> 사용자 인터페이스 구축을 위한 자바스크립트 라이브러리

---


- [리액트 공식 문서(과거)](https://ko.legacy.reactjs.org/)
- [리액트 공식 문서](https://ko.react.dev/)


### 참고글
- [[번역] 2024년에 리액트 프로젝트 시작하는법](https://velog.io/@lky5697/react-starter)
- [[번역] 2024 리액트 트렌드](https://ykss.netlify.app/translation/react_trends_in_2024/)
- [[번역] 2024 리액트 라이브러리](https://ykss.netlify.app/translation/react_libraries_for_2024/)


- [React Hook 총정리](https://velog.io/@dongdong98/React-Hook-총정리#왜-hook을-쓰면-좋은가)
- [React Hooks의 이해](https://velog.io/@gwak2837/React-Hooks의-이해)


> - 라이브러리 : [React](https://reactjs-kr.firebaseapp.com/)
> - 패키지매니저 : [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.io/)
> - 빌드 도구 : [vite](https://ko.vitejs.dev/)
> - 프레임워크 : [next.js](https://nextjs.org/) (or Remix)
> - 프로그래밍 언어 : [typescript](https://www.typescriptlang.org/)
> - 리액트 라이브러리
>  - 상태관리 : [Redux](https://ko.redux.js.org/) (or [Zustand](https://github.com/pmndrs/zustand) = 간편하다고 함)
>  - 데이터패칭 : [TanStack Query]()


### 참고 강의
- [소플 처음부터 만난 리액트](https://www.inflearn.com/course/처음-만난-리액트) (study-soaple 폴더)
- [벨로퍼트와 함꼐하는 모던 리액트](https://react.vlpt.us) (study-vlpt 폴더)
- (유료) [[유데미]next-js](https://www.udemy.com/course/nextjs-react-incl-two-paths)
- (유료) [제로초 SNS 클론 코딩](https://www.inflearn.com/course/next-react-query-sns)



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

---




#### useReducer
reducer 는 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수입니다.

#### useState vs useReducer
컴포넌트에 관리하는 값이 딱 하나이고 그 값이 단순한 숫자, 문자열, boolean 값이라면 useSate
컴포넌트에서 관리하는 값이 여러개가 되어서 상태의 구조가 복잡해 진다면 useReducer

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
