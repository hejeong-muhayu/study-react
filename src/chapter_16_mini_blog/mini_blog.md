### 미니 블로그에 필요한 기능

- 글목록 보기 기능 
  - PostList, PostListItem
- 글보기 기능
  - Post
- 댓글보기 기능
  - CommentList, CommentListItem
- 글 작성 기능
  - PostWrite
- 댓글 작성 기능
  - CommentWrite


![img.png](img.png)


#### 패키지 설치
- react-router-dom v6
  - 페이지 전환을 위해 사용하는 패키지
- styled-components v5
  - 스타일링을 위한 라이브러리

    
```
$ npm install --save react-router-dom 
$ npm install --save styled-components
```

package.json 에 추가 된것 확인 가능

다른곳에서 오픈할때 npm install 만 하면 됨

```
src
  ㄴ component
    ㄴ list : 리스트 Component들을 모아놓은 폴더
    ㄴ page : 페이지 Component들을 모아놓은 폴더
    ㄴ ui   : UI Component들을 모아놓은 폴더 
```

참고 [소플 github]( 
https://github.com/soaple/mini-blog/tree/master)
