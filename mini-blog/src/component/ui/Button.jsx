import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border-width: 1px;
  border-radius: 8px;
  cursor: pointer;
`;

function Button(props) {
  // Button 컴포넌트에서 props로 받은 title이 button목록에 표시
  // props로 받은 onClick은 StyledButton에 onClick에 넣어줌으로서
  // 클릭이벤트를 상위컴포넌트에서 받을 수 있도록 함
  const { title, onClick } = props;
  return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;
