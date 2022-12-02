import styled from "styled-components";

const Container = ({ leftTop, LeftBottom, Right }) => {
  return (
    <StyledLayout>
      {leftTop}
      {LeftBottom}
      {Right}
    </StyledLayout>
  );
};

export default Container;

const StyledLayout = styled.div`
  padding: 15px;
  height: 100%;
  display: grid;
  grid-template-columns: 12fr 1fr;
  grid-template-rows: 1fr 30px;
  grid-auto-flow: column;
  > :last-child {
    grid-row: span 2;
  }
`;
