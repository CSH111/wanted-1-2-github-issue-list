import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Header";
import * as S from "./styles";

const Layout = () => {
  return (
    <S.Container>
      <S.HeaderContainer>
        <Header />
      </S.HeaderContainer>
      <S.Main>
        <Outlet />
      </S.Main>
    </S.Container>
  );
};

export default Layout;
