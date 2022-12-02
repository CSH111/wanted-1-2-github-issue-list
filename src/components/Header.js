import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <Link to={"/"}>React issues</Link>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  font-size: 25px;
`;
