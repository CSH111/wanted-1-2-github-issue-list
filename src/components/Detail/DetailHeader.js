import styled from "styled-components";

const DetailHeader = ({ title, date, user, commentsNumber, issueNumber }) => {
  return (
    <header>
      <h2>
        {title} #{issueNumber}
      </h2>
      <StyledMetaData>
        <div>
          {date} opened by {user}.
        </div>
        <div>{commentsNumber} comments</div>
      </StyledMetaData>
    </header>
  );
};

export default DetailHeader;

const StyledMetaData = styled.div`
  display: flex;
  > :first-child {
    margin-right: 10px;
  }
`;
