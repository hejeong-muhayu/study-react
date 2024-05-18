
## 리액트 공부하기
- [리액트 공식 홈페이지](https://reactjs-kr.firebaseapp.com/tutorial/tutorial.html)

참고 강의
- [소플 처음부터 만난 리액트](https://www.inflearn.com/course/처음-만난-리액트) (react-soaple 폴더)
- [벨로퍼트와 함꼐하는 모던 리액트](https://react.vlpt.us) (react-vlpt 폴더)

---

### 리액트란 ?
A JavaScript library fot building user interface

사용자 인터페이스 구축을 위한 자바스크립트 라이브러리

---

### 리액트 시작하기


node.js 설치 : https://nodejs.org/en


    $ node --version
    v20.13.1

    $ npm --version
    10.5.2

    $ npx create-react-app [프로젝트 이름]
    
    $ npm start

---

리액트 시작하기전 ! 인텔리제이에 깔아둬야할 플러그인 

[React snippets](https://plugins.jetbrains.com/plugin/10113-react-snippets)

플러그인 - > 라이브 템플릿 -> React

rsf



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


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
