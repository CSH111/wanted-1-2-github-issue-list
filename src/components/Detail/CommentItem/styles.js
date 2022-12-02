import styled from "styled-components";

export const CommentItem = styled.li`
  background-color: white;
  border-radius: 10px;
  margin-bottom: 50px;
`;

export const CommentHeader = styled.header`
  background-color: #c6c6c6;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 10px 20px;
  display: grid;
  grid-template-columns: 1.2fr 10fr 2fr;
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 50px;
  border-radius: 50%;
`;

export const CommentBody = styled.div`
  padding: 20px;
  overflow-x: auto;
`;
