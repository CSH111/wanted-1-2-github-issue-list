import * as S from "./styles";

const AdItem = ({ imgSrc, link }) => {
  return (
    <S.ListItemCard>
      <S.AdLink href={link} target="_blank" rel="noopener noreferrer">
        <img src={imgSrc} />
      </S.AdLink>
    </S.ListItemCard>
  );
};

export default AdItem;
