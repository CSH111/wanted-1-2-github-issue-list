import styled from "styled-components";

const Balloon = styled.div`
  background-color: ${({ theme }) => theme.bgColor.midGray};
  position: relative;
  min-width: 30px;
  display: flex;
  justify-content: center;
  font-size: 15px;
  border-radius: 5px;
  padding: 3px 6px;
  ::before {
    content: "";
    top: 90%;
    left: 10%;
    position: absolute;
    border-top: 10px solid ${({ theme }) => theme.bgColor.midGray};
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }
`;
export default Balloon;
