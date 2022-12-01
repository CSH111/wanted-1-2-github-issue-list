import AdImg from "../../../assets/wanted.jpg";
import * as S from "./styles";

const AdItem = () => {
  return (
    <S.ListItemCard>
      <S.AdLink href="https://www.wanted.co.kr/" target="_blank" rel="noopener noreferrer">
        <img src={AdImg} />
      </S.AdLink>
    </S.ListItemCard>
  );
};

export default AdItem;
