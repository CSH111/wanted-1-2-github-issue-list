import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { URL, wanted_img } from "../assets/ad";
import { ErrorPage } from "../components/common";
import {
  AdItem,
  BottomSpinner,
  CenterSpinner,
  Container,
  Filter,
  IssueList,
  IssueListItem,
} from "../components/Home";
import { Issue } from "../context";
import { useGetIssues, useInfiniteScroll } from "../hooks";
import { isAdTurn } from "../utils";

// 의존성 배열에 함수... // 필터바꿀때 리로드 하도록?ㄴㄴ
const Home = () => {
  const { issuesData, isLoading, isError, pageToRender } = Issue.useSelector();
  const getIssues = useGetIssues();

  useEffect(() => {
    if (pageToRender === 1) {
      getIssues(pageToRender);
    }
  }, []);

  useInfiniteScroll(() => {
    getIssues(pageToRender);
  }, [pageToRender]);

  if (isError) {
    return (
      <ErrorPage>
        <Link to="/">retry</Link>
      </ErrorPage>
    );
  }

  return (
    <Container>
      <Filter />
      <IssueList>
        {isLoading && pageToRender === 1 && <CenterSpinner />}
        {issuesData.map((issue, idx) => (
          <React.Fragment key={issue.id}>
            <IssueListItem
              title={issue.title}
              user={issue.user}
              date={issue.date}
              number={issue.number}
              comments={issue.comments}
            />
            {isAdTurn(idx) && <AdItem imgSrc={wanted_img} link={URL.wanted} />}
          </React.Fragment>
        ))}
        {isLoading && pageToRender !== 1 && <BottomSpinner />}
      </IssueList>
    </Container>
  );
};

export default Home;
