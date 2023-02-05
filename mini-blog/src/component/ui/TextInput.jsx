import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
    width: calc(100% - 32px);
    ${(props) => props.height &&
        `
        height: ${props.height}px;
    `}
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
`;

function TextInput(props) {
    // 높이설정(height), 입력값 표시(value), 변경값 상위 컴포넌트 전달(onChange)
    const { height, value, onChange } =props;

    return <StyledTextarea height={height} value={value} onChange={onChange} />;
}

export default TextInput;