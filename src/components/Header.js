import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <h1>React issues</h1>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  h1 {
    margin: 0;
  }
`;
