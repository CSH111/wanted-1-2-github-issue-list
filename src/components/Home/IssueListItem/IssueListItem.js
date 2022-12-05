import { Link } from "react-router-dom";

import { Balloon, Container } from "./components";
import * as S from "./styles";

const IssueListItem = ({ title, user, date, number, comments }) => {
  return (
    <S.ListItemCard>
      <Container
        leftTop={
          <S.Title>
            <Link to={`/${number}`}>{title}</Link>
          </S.Title>
        }
        LeftBottom={
          <S.Meta>
            #{number} opened on {date} by {user}
            {/* <S.Data>#{number}</S.Data>
            <S.Data>opened on{date}</S.Data>
            <S.Data>by {user}</S.Data> */}
          </S.Meta>
        }
        Right={
          <S.CommentAmountArea>
            <Balloon>{comments}</Balloon>
          </S.CommentAmountArea>
        }
      />
    </S.ListItemCard>
  );
};

export default IssueListItem;
