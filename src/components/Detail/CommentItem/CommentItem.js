import ReactMarkdown from "react-markdown";

import * as S from "./styles";

const CommentItem = ({ avatar, user, date, body }) => {
  return (
    <S.CommentItem>
      <S.CommentHeader>
        <S.ProfileImg src={`${avatar}`} />
        <div>{user}</div>
        <div>{date}</div>
      </S.CommentHeader>
      <S.CommentBody>
        <ReactMarkdown>{body}</ReactMarkdown>
      </S.CommentBody>
    </S.CommentItem>
  );
};

export default CommentItem;
