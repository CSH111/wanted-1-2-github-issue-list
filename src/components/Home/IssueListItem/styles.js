import styled from "styled-components";

import { ListItemCard as Card } from "../styles";

export const ListItemCard = styled(Card)``;

const Title = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
ListItemCard.Title = Title;

const Meta = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
`;
ListItemCard.Meta = Meta;

const Number = styled.div`
  margin-right: 5px;
`;
ListItemCard.Meta.Number = Number;

const Date = styled.div`
  margin-right: 5px;
`;
ListItemCard.Meta.Date = Date;

const User = styled.div``;
ListItemCard.Meta.User = User;

const CommentAmountArea = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
ListItemCard.CommentAmountArea = CommentAmountArea;
