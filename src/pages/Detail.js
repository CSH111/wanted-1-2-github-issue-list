import { Link, useParams } from "react-router-dom";

import { ErrorPage } from "../components/common";
import {
  CenterSpinner,
  CommentItem,
  CommentList,
  Container,
  DetailHeader,
} from "../components/Detail";
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
    <Container>
      {isLoading && <CenterSpinner />}
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
              <CommentItem
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
    </Container>
  );
};

export default Detail;
