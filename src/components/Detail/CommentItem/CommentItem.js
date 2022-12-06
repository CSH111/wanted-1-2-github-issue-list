import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import CodeBlock from "./CodeBlock";
import * as S from "./styles";
const CommentItem = ({ avatar, user, date, body }) => {
  return (
    <S.CommentItem>
      <S.CommentHeader>
        <S.ProfileImg src={`${avatar}`} alt="profile" />
        <div>{user}</div>
        <S.CreatedDate>{date}</S.CreatedDate>
      </S.CommentHeader>
      <S.CommentBody>
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={CodeBlock}>
          {body}
        </ReactMarkdown>
      </S.CommentBody>
    </S.CommentItem>
  );
};

export default CommentItem;
