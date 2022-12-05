import styled from "styled-components";

import { ListItemCard as OriginalListItemCard } from "../styles";

export const ListItemCard = styled(OriginalListItemCard)``;

export const Title = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
`;

export const Meta = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
  font-size: 1.3rem;
`;

export const Data = styled.div`
  font-size: 0.8rem;
  &:not(:last-of-type)::after {
    content: "|";
    margin: 0 10px;
    color: gray;
  }
`;

export const CommentAmountArea = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
