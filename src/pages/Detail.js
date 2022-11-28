import { Link, useParams } from "react-router-dom";

import { ErrorPage } from "../components/common";
import { CommentList, CommentListItem, DetailHeader } from "../components/Detail";
import * as S from "../components/Detail/styles";
import Spinner from "../components/Spinner";
import { useIssueDetail } from "../hooks";
import { deleteISOTime } from "../utils";

const Detail = () => {
  const { issueNumber } = useParams();
  const { commentsData, isError, isLoading } = useIssueDetail(issueNumber);
  const [mainComment] = commentsData;
  if (isError) {
    return (
      <ErrorPage>
        <Link to="/">Home</Link>
        <br />
        <Link to={0}>retry</Link>
      </ErrorPage>
    );
  }
  return (
    <S.PageContainer>
      {isLoading && <Spinner className="spinner" />}
      {!isLoading && (
        <>
          <DetailHeader
            title={mainComment.title}
            date={deleteISOTime(mainComment.created_at)}
            user={mainComment.user.login}
            commentsNumber={mainComment.comments}
            issueNumber={issueNumber}
          />
          <CommentList>
            {commentsData.map((comment) => (
              <CommentListItem
                key={comment.id}
                user={comment.user.login}
                avatar={comment.user.avatar_url}
                date={deleteISOTime(comment.created_at)}
                body={comment.body}
              />
            ))}
          </CommentList>
        </>
      )}
    </S.PageContainer>
  );
};

export default Detail;
