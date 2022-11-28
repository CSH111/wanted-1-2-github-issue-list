import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { ErrorPage, Spinner } from "../components/common";
import { AdArea, IssueList, IssueListItem } from "../components/Home";
import { Issue } from "../context";
import { useGetIssues, useInfiniteScroll } from "../hooks";

const Home = () => {
  const { issuesData, isLoading, isError, pageToRender } = Issue.useSelector();
  const getIssues = useGetIssues();
  const isAdTurn = (idx) => idx > 0 && idx % 5 === 0;

  useEffect(() => {
    if (pageToRender === 1) {
      getIssues();
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
      {isLoading && pageToRender === 1 && <Spinner className="spinner-main" />}
      {issuesData.map((issue, idx) => (
        <React.Fragment key={issue.id}>
          <IssueListItem
            title={issue.title}
            user={issue.user}
            date={issue.date}
            number={issue.number}
            comments={issue.comments}
          />
          {isAdTurn(idx) && (
            <a href="https://www.wanted.co.kr/" target="_blank" rel="noopener noreferrer">
              <AdArea key={123} />
            </a>
          )}
        </React.Fragment>
      ))}
      {isLoading && pageToRender !== 1 && <Spinner className="spinner-sub" />}
    </IssueList>
  );
};

export default Home;
