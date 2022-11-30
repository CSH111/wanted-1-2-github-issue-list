import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { ErrorPage } from "../components/common";
import { AdArea, BottomSpinner, CenterSpinner, IssueList, IssueListItem } from "../components/Home";
import { Issue } from "../context";
import { useGetIssues, useInfiniteScroll } from "../hooks";
import { isAdTurn } from "../utils";
// 항상 스크롤이 존재하게끔 만들 수 있나? 고해상도에서 스크롤 없으면 로드불가 해결하기
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
          {isAdTurn(idx) && <AdArea key={Date.now()} />}
        </React.Fragment>
      ))}
      {isLoading && pageToRender !== 1 && <BottomSpinner />}
    </IssueList>
  );
};

export default Home;
