import styled from "styled-components";

import { Spinner as OriginalSpinner } from "../common";

const Spinner = styled(OriginalSpinner)`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
`;

export default Spinner;
