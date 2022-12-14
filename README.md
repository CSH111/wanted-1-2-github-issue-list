# React GitHub Issues

## 배포주소

https://chosungho-react-issues.netlify.app/

<br>

## 프로젝트 소개
- [Github Rest Api](https://docs.github.com/en/rest/issues/issues)를 활용해 React github의 이슈를 조회할 수 있는 React.js 토이프로젝트입니다.
- 이슈 목록 및 상세 페이지로 구성되어있습니다.

<br>

## 프로젝트 기간
2022/10/29 ~ 2022/10/31 기능구현: 이슈목록 및 이슈 조회, 무한스크롤

2022/11/22~2022/12/06 기능추가 및 리팩토링: 필터, 딥링크, DI 패턴 적용 등

<br>

## 기술스택 및 사용 라이브러리

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">  
<img src="https://img.shields.io/badge/context--api-e7e7e7?style=for-the-badge">  
<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/react--markdown-e7e7e7?style=for-the-badge"> <img src="https://img.shields.io/badge/react--syntax--highlighter-e7e7e7?style=for-the-badge"> <img src="https://img.shields.io/badge/react--icons-e7e7e7?style=for-the-badge">  
<img src="https://img.shields.io/badge/axios-e7e7e7?style=for-the-badge">

<br>

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
https://chosungho-react-issues.netlify.app/?sort=created  
https://chosungho-react-issues.netlify.app/?sort=updated

<br>

### 디테일 페이지(markdown, syntaxhighlight)
![detailPage](https://user-images.githubusercontent.com/105113833/205877294-111a7184-0eb3-4cd7-87c6-38c556072b5e.gif)
- react-markdown, react-syntax-hightlihgt 라이브러리를 이용해 가독성 좋게 이슈내용을 읽을 수 있습니다.

