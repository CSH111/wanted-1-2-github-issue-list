import { useParams } from "react-router-dom";

import CommentListItem from "../components/Detail/CommentListItem";
import ErrorPage from "../components/Detail/ErrorPage";
import * as S from "../components/Detail/styles";
import Spinner from "../components/Spinner";
import { useGetIssueDetail } from "../hooks";

const Detail = () => {
  const { issueNumber } = useParams();
  const { mainData, commentsData, isError, isLoading } = useGetIssueDetail(issueNumber);

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
            <h1>
              {mainData.title} #{issueNumber}
            </h1>
            <div className="meta">
              <div>
                {mainData.created_at.split("T")[0]} opened by {mainData.user.login}.
              </div>
              <div>{mainData.comments} comments</div>
            </div>
          </S.Header>

          <S.List>
            <CommentListItem
              key={mainData.id}
              user={mainData.user.login}
              avatar={mainData.user.avatar_url}
              date={mainData.created_at?.split("T")[0]}
              body={mainData.body}
            />
            {commentsData.map((obj) => (
              <CommentListItem
                key={obj.id}
                user={obj.user.login}
                avatar={obj.user.avatar_url}
                date={obj.created_at.split("T")[0]}
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
