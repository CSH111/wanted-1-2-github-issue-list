import React from "react";
import styled from "styled-components";

import AdImg from "../../assets/wanted.jpg";
import * as S from "./styles";

const AdArea = () => {
  return (
    <S.ListItemCard>
      <StyledLink href="https://www.wanted.co.kr/" target="_blank" rel="noopener noreferrer">
        <img src={AdImg} />
      </StyledLink>
    </S.ListItemCard>
  );
};

export default AdArea;

const StyledLink = styled.a`
  min-height: inherit;

  display: flex;
  align-items: center;
  justify-content: center;
`;
