# React GitHub Issues

## 배포주소

https://chosungho-react-issues.netlify.app/


## 프로젝트 소개
- Github Rest Api를 활용해 React github의 이슈를 조회할 수 있는 React.js 토이프로젝트입니다.
- 이슈 목록 및 상세 페이지로 구성되어있습니다.

## 기능 소개
### 무한스크롤
![infiniteScroll](https://user-images.githubusercontent.com/105113833/205874753-33593c75-c104-4c65-ab00-954528706568.gif)
- 메인 페이지 하단을 감지해 api 요청을 보내고 받은 이슈 데이터를 리스트에 추가합니다.
<br>

### 필터(정렬)
![filterChange](https://user-images.githubusercontent.com/105113833/205875066-bae959aa-8e37-4444-89e6-af51c5bc0372.gif)
- 필터 상태에 따라 api 요청을 보내 코멘트, 생성, 업데이트 순으로 정렬된 데이터 출력합니다.

<br>

### 스크롤, 필터상태 저장
![scorllSave](https://user-images.githubusercontent.com/105113833/205875452-ef01a490-86de-413b-b2aa-59c5cce5947d.gif)
- 리스트를 전역상태에 저장하고 필터상태는 URL에 저장합니다.
- 디테일 페이지에서 브라우저의 뒤로가기 이용시 이전의 리스트와 필터상태로 돌아갈 수 있습니다.

<br>

### 필터상태 딥링크
![urlAccess](https://user-images.githubusercontent.com/105113833/205875808-6c5a057a-ed59-479e-bef5-be34214e2337.gif)
- sort 파라미터가 포함된 URL에 접근시 필터가 적용된 상태의 페이지로 접속합니다.  
<a href="https://chosungho-react-issues.netlify.app/?sort=created" target="_blank">https://chosungho-react-issues.netlify.app/?sort=created(새탭)</a>  
<a href="https://chosungho-react-issues.netlify.app/?sort=updated" target="_blank">https://chosungho-react-issues.netlify.app/?sort=updated(새탭)</a>

<br>

### 디테일 페이지(markdown, syntaxhighlight)
![detailPage](https://user-images.githubusercontent.com/105113833/205877294-111a7184-0eb3-4cd7-87c6-38c556072b5e.gif)
- react-markdown, react-syntax-hightlihgt 라이브러리를 이용해 가독성있게 이슈내용을 읽을 수 있습니다.

