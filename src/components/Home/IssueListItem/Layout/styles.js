import styled from "styled-components";

export const Container = styled.div`
  padding: 15px;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 30px;
  grid-template-columns: 12fr 1fr;
`;

const LeftTop = styled.div``;
Container.LeftTop = LeftTop;

const LeftBottom = styled.div``;
Container.LeftBottom = LeftBottom;

const Right = styled.div`
  grid-row: span 2;
`;
Container.Right = Right;
