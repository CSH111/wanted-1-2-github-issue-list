import * as S from "./styles";
const DetailHeader = ({ title, date, user, commentsNumber, issueNumber }) => {
  return (
    <S.Header>
      <h2>
        {title} #{issueNumber}
      </h2>
      <div className="meta">
        <div>
          {date} opened by {user}.
        </div>
        <div>{commentsNumber} comments</div>
      </div>
    </S.Header>
  );
};

export default DetailHeader;
