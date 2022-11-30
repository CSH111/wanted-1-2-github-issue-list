import { Link } from "react-router-dom";

import { Balloon, Layout } from "./components";
import * as S from "./styles";

const IssueListItem = ({ title, user, date, number, comments }) => {
  return (
    <S.ListItemCard>
      <Layout
        leftTop={
          <S.ListItemCard.Title>
            <Link to={`/${number}`}>{title}</Link>
          </S.ListItemCard.Title>
        }
        LeftBottom={
          <S.ListItemCard.Meta>
            <S.ListItemCard.Meta.Data>#{number}</S.ListItemCard.Meta.Data>
            <S.ListItemCard.Meta.Data>opened on {date}</S.ListItemCard.Meta.Data>
            <S.ListItemCard.Meta.Data>by {user}</S.ListItemCard.Meta.Data>
          </S.ListItemCard.Meta>
        }
        Right={
          <S.ListItemCard.CommentAmountArea>
            <Balloon>{comments}</Balloon>
          </S.ListItemCard.CommentAmountArea>
        }
      />
    </S.ListItemCard>
  );
};

export default IssueListItem;
