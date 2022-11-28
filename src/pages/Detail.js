import { useParams } from "react-router-dom";

import CommentListItem from "../components/Detail/CommentListItem";
import ErrorPage from "../components/Detail/ErrorPage";
import * as S from "../components/Detail/styles";
import Spinner from "../components/Spinner";
import { useIssueDetail } from "../hooks";
import { deleteISOTime } from "../utils";

const Detail = () => {
  const { issueNumber } = useParams();
  const { commentsData, isError, isLoading } = useIssueDetail(issueNumber);
  const [mainComment] = commentsData;

  if (isError) {
    return <ErrorPage />;
  }
  return (
    <S.PageContainer>
      {isLoading ? (
        <Spinner className="spinner" />
      ) : (
        <>
          <S.Header>
            <h2>
              {mainComment.title} #{issueNumber}
            </h2>
            <div className="meta">
              <div>
                {deleteISOTime(mainComment.created_at)} opened by {mainComment.user.login}.
              </div>
              <div>{mainComment.comments} comments</div>
            </div>
          </S.Header>

          <S.List>
            {commentsData.map((obj) => (
              <CommentListItem
                key={obj.id}
                user={obj.user.login}
                avatar={obj.user.avatar_url}
                date={deleteISOTime(obj.created_at)}
                body={obj.body}
              />
            ))}
          </S.List>
        </>
      )}
    </S.PageContainer>
  );
};

export default Detail;
