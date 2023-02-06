import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  background: white;
  :hover {
    background: #07c0e5;
  }
`;

// ContentText를 통해 comment 객체를 화면에 표시
const ContentText = styled.p`
  font-size: 14px;
`;

// comment 객체에는 사용자가 작성한 댓글 내용이 들어있음
function CommentListItem(props) {
  const { comment } = props;

  return (
    <Wrapper>
      <ContentText>{comment.content}</ContentText>
    </Wrapper>
  );
}

export default CommentListItem;
