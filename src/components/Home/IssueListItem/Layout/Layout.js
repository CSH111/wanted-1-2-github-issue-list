import * as S from "./styles";

const Layout = ({ leftTop, LeftBottom, Right }) => {
  return (
    <S.Container>
      <S.Container.LeftTop>{leftTop}</S.Container.LeftTop>
      <S.Container.Right>{Right}</S.Container.Right>
      <S.Container.LeftBottom>{LeftBottom}</S.Container.LeftBottom>
    </S.Container>
  );
};

export default Layout;
