import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.bgColor.lightGray};
  max-width: 1000px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const HeaderContainer = styled.div`
  margin-bottom: 10px;
`;
export const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
