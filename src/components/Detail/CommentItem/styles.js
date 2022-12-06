import styled from "styled-components";

export const CommentItem = styled.li`
  background-color: white;
  border-radius: 10px;
  margin-bottom: 50px;
`;

export const CommentHeader = styled.header`
  background-color: ${({ theme }) => theme.bgColor.midGray};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 10px 20px;
  display: grid;
  grid-template-columns: 60px 1fr 1fr;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.bgColor.lightGray};
`;

export const CreatedDate = styled.div`
  justify-self: flex-end;
`;

export const CommentBody = styled.div`
  padding: 20px;
  overflow-x: auto;
`;
