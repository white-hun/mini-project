import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

const Wrapper = styled.div`
    padding: 16px
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;

  & > * {
    :not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

// 제목을 위한, 글의 내용을 위한 state 2개를 가지고 있다
// 실제 화면에 나타나는 부분은 TextInput을 사용해서 글의 제목과 내용을 각각 입력 받을 수 있도록 구성
// 화면 최하단에는 Button 컴포넌트를 사용해서 글 작성 버튼은 추가
function PostWritePage(props) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <Wrapper>
      <Container>
        <TextInput
          height={20}
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <TextInput
          height={400}
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />

        <Button
          title="글 작성하기"
          onClick={() => {
            navigate("/");
          }}
        />
      </Container>
    </Wrapper>
  );
}

export default PostWritePage;
