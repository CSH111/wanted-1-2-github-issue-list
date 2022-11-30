import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { ErrorPage } from "../components/common";
import { AdArea, BottomSpinner, CenterSpinner, IssueList, IssueListItem } from "../components/Home";
import { Issue } from "../context";
import { useGetIssues, useInfiniteScroll } from "../hooks";
import { isAdTurn } from "../utils";

const Home = () => {
  const { issuesData, isLoading, isError, pageToRender } = Issue.useSelector();
  const getIssues = useGetIssues();

  useEffect(() => {
    const initialLoadAmount = 10;
    if (pageToRender === 1) {
      getIssues(pageToRender, initialLoadAmount);
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
