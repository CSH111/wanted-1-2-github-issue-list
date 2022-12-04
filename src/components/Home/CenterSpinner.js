import styled from "styled-components";

import Spinner from "../common/Spinner";

const CenterSpinner = styled(Spinner)`
  position: absolute;
  top: 35%;
  left: 50%;
  translate: -50% -50%;
`;

export default CenterSpinner;
