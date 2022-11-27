import React, { useEffect } from "react";

import Spinner from "../../components/Spinner";
import { Issue } from "../../context";
import { useGetIssues, useInfiniteScroll } from "../../hooks";
import AdArea from "./AdArea";
import ErrorPage from "./ErrorPage";
import IssueListItem from "./IssueListItem";
import * as S from "./styles";

const IssueList = () => {
  const { issuesData, isLoading, isError, pageToRender } = Issue.useSelector();
  const getIssues = useGetIssues();
  const isAdTurn = (idx) => idx > 0 && idx % 6 === 0;

  useEffect(() => {
    if (pageToRender === 1) {
      getIssues();
    }
  }, []);

  useInfiniteScroll(() => {
    getIssues(pageToRender);
  }, [pageToRender]);

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <S.List className="list">
      {isLoading && pageToRender === 1 && <Spinner className="spinner-main" />}
      {issuesData?.map((issue, idx) => (
        <React.Fragment key={issue.id}>
          {isAdTurn(idx) && (
            <a href="https://www.wanted.co.kr/" target="_blank" rel="noopener noreferrer">
              <AdArea key={123} />
            </a>
          )}
          <IssueListItem
            title={issue.title}
            user={issue.user}
            date={issue.date}
            number={issue.number}
            comments={issue.comments}
          />
        </React.Fragment>
      ))}
      {isLoading && pageToRender !== 1 && <Spinner className="spinner-sub" />}
    </S.List>
  );
};

export default IssueList;
