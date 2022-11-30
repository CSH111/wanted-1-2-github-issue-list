import styled from "styled-components";

const IssueList = ({ children }) => {
  return <StyledIssueList>{children}</StyledIssueList>;
};

export default IssueList;

const StyledIssueList = styled.ul`
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
