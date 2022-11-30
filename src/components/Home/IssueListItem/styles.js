import styled from "styled-components";

import { ListItemCard as OriginalListItemCard } from "../styles";

export const ListItemCard = styled(OriginalListItemCard)``;

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

const Data = styled.div`
  &:not(:last-of-type)::after {
    content: "|";
    margin: 0 10px;
    color: gray;
  }
`;
ListItemCard.Meta.Data = Data;

const CommentAmountArea = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
ListItemCard.CommentAmountArea = CommentAmountArea;
