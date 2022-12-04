import * as S from "./styles";

const AdItem = () => {
  return (
    <S.ListItemCard>
      <S.AdLink href={"https://www.google.com"} target="_blank" rel="noopener noreferrer">
        AD
      </S.AdLink>
    </S.ListItemCard>
  );
};

export default AdItem;
