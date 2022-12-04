import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import * as S from "./styles";

const CommentItem = ({ avatar, user, date, body }) => {
  return (
    <S.CommentItem>
      <S.CommentHeader>
        <S.ProfileImg src={`${avatar}`} alt="profile" />
        <div>{user}</div>
        <div>{date}</div>
      </S.CommentHeader>
      <S.CommentBody>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
      </S.CommentBody>
    </S.CommentItem>
  );
};

export default CommentItem;
