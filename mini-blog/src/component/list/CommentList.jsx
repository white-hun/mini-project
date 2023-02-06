import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";

// & > * 해당 부모 element의 모든 자식들에세 스타일을 적용 하기 위한 selector
// & 는 Sass에서 제공하는 parent selector를 의미
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

// comments에는 comment 객체들이 들어 있으며 이 배열에 map 함수를 사용해서
// 각 댓글 객체를 CommentListItem 컴포넌트로 넘겨 화면에 댓글을 표시
function CommentList(props) {
  const { comments } = props;

  return (
    <Wrapper>
      {comments.map((comment, index) => {
        return <CommentListItem key={comment.id} comment={comment} />;
      })}
    </Wrapper>
  );
}

export default CommentList;
