import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Spinner from "../../components/Spinner";
import { Issue } from "../../context";
import { useGetIssues, useInfiniteScroll } from "../../hooks";
import { ErrorPage } from "../common";
import AdArea from "./AdArea";
import IssueListItem from "./IssueListItem";
import * as S from "./styles";

const IssueList = () => {
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
    <S.List className="list">
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
    </S.List>
  );
};

export default IssueList;
