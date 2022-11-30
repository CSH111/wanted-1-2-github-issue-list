import { FaSpinner } from "react-icons/fa";
import styled from "styled-components";

const Spinner = styled(FaSpinner)`
  @keyframes spinning {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  animation: spinning 2s linear infinite;
  font-size: ${({ size }) => size ?? "40px"};
`;

export default Spinner;
