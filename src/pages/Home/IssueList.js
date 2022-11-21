import React, { useEffect, useState } from "react";

import Spinner from "../../components/Spinner";
import { useIssueSelector } from "../../context/issuesContext";
import { useGetIssues } from "../../hooks";
import { isEndOfPage, watchScrollStop } from "../../utils";
import AdArea from "./AdArea";
import ErrorPage from "./ErrorPage";
import IssueListItem from "./IssueListItem";
import * as S from "./styles";

const IssueList = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const {
    issuesData,
    status: { isLoading, isError },
  } = useIssueSelector();
  const getIssues = useGetIssues();

  const addPageNumber = () => {
    if (isEndOfPage()) {
      setPageNumber((num) => num + 1);
    }
  };

  useEffect(() => {
    watchScrollStop(addPageNumber);
  }, []);

  useEffect(() => {
    getIssues(pageNumber);
  }, [pageNumber]);

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <S.List className="list">
      {isLoading && pageNumber === 1 && <Spinner className="spinner-main" />}
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
      {isLoading && pageNumber > 1 && <Spinner className="spinner-sub" />}
    </S.List>
  );
};

export default IssueList;
