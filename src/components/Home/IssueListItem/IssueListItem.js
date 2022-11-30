import { Link } from "react-router-dom";

import Balloon from "./Balloon";
import { Layout } from "./Layout";
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
            <S.ListItemCard.Meta.Number>#{number}</S.ListItemCard.Meta.Number>
            <S.ListItemCard.Meta.Date>opened on {date}</S.ListItemCard.Meta.Date>
            <S.ListItemCard.Meta.User>by {user}</S.ListItemCard.Meta.User>
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
