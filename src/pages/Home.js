import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

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
import { useGetIssues, useInfiniteScroll, useUpdateEffect } from "../hooks";
import { isAdTurn } from "../utils";

const Home = () => {
  const [params, setParams] = useSearchParams();
  const sortOption = params.get("sort");
  const { issuesData, isLoading, isError, pageToRender } = Issue.useSelector();
  const getIssues = useGetIssues();
  const firstPageNumber = 1;

  useEffect(() => {
    if (sortOption && !issuesData.length) {
      getIssues(firstPageNumber, sortOption, true);
      return;
    }
    if (sortOption) return;
    setParams({ sort: "comments" });
  }, []);

  useUpdateEffect(() => {
    getIssues(firstPageNumber, sortOption, true);
  }, [sortOption]);

  useInfiniteScroll(() => {
    getIssues(pageToRender, sortOption);
  }, [pageToRender, sortOption]);

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
