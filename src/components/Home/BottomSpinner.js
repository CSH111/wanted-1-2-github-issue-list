import styled from "styled-components";

import Spinner from "../common/Spinner";

const BottomSpinner = () => {
  return (
    <StyledContainer>
      <Spinner />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default BottomSpinner;
