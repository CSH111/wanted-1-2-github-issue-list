import styled from "styled-components";

const CommentList = ({ children }) => {
  return <StyledList>{children}</StyledList>;
};

export default CommentList;

const StyledList = styled.ul`
  width: 100%;
`;
