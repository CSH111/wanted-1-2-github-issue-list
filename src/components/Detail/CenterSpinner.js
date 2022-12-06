import styled from "styled-components";

import { Spinner } from "../common";

const CenterSpinner = () => {
  return (
    <StyledContainer>
      <Spinner />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default CenterSpinner;
