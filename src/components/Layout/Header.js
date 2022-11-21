import { Link } from "react-router-dom";

import * as S from "./styles";
const Header = () => {
  return (
    <S.Header>
      <Link to="/">Angular-cli issue</Link>
    </S.Header>
  );
};

export default Header;
