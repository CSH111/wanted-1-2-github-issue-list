import React, { useEffect } from "react";

import Spinner from "../../components/Spinner";
import { useIssueSelector } from "../../context/issuesContext";
import { useGetIssues } from "../../hooks";
import { isEndOfPage } from "../../utils";
import AdArea from "./AdArea";
import ErrorPage from "./ErrorPage";
import IssueListItem from "./IssueListItem";
import * as S from "./styles";

const IssueList = () => {
  const { issuesData, isLoading, isError, pageToRender } = useIssueSelector();
  const getIssues = useGetIssues();

  useEffect(() => {
    if (pageToRender === 1) {
      getIssues();
    }
  }, []);

  useEffect(() => {
    let timer;
    const debounce = () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        if (isEndOfPage()) {
          getIssues(pageToRender);
        }
      }, 200);
    };
    window.addEventListener("scroll", debounce);
    return () => {
      window.removeEventListener("scroll", debounce);
    };
  }, [pageToRender]);

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <S.List className="list">
      {isLoading && pageToRender === 1 && <Spinner className="spinner-main" />}
      {issuesData?.map((issue, idx) => (
        <React.Fragment key={issue.id}>
          {idx === 4 && (
            <a href="https://www.wanted.co.kr/" target="_blank" rel="noreferrer">
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
