# React GitHub Issues

## 배포주소

https://chosungho-react-issues.netlify.app/


## 프로젝트 소개
- React github의 이슈를 조회할 수 있는 React.js 토이프로젝트입니다.
- 이슈 목록 및 상세 페이지로 구성되어있습니다.

## 기능 소개
### 무한스크롤
![infinitScroll](https://user-images.githubusercontent.com/105113833/205701089-b6d47835-334a-4ec7-892f-4ae1c86307da.gif)
- 페이지 하단을 감지해 api 요청을 추가적으로 보내어 리스트를 추가합니다.
  <details>
  <summary>코드</summary>

  ```jsx
  // src/pages/Home.js
  import { useInfiniteScroll } from "../hooks";
  
  const Home = () => {
  //...
    useInfiniteScroll(() => {
      if (isLoading) return;
      getIssues(pageToRender, sortOption);
    }, [pageToRender, sortOption, isLoading]);
  //...
  ```
  ```jsx
  //src/hooks/useInfiniteScroll.js
  import { isEndOfPage } from "../utils";
  
  const useInfiniteScroll = (callback, deps = []) => {
    useEffect(() => {
      const delayTime = 200;
      let timer;
      const debounce = () => {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(() => {
          if (isEndOfPage()) {
            callback();
          }
        }, delayTime);
      };
      window.addEventListener("scroll", debounce);
      return () => {
        window.removeEventListener("scroll", debounce);
      };
    }, [...deps]);
  };
  ```
  
  ```js
  // src/utils/isEndOfPage.js
  const isEndOfPage = (margin = 300) => window.scrollY + window.innerHeight >= document.body.offsetHeight - margin;
  ```

  </details>

 ```js
  console.log("hi")
 ```
