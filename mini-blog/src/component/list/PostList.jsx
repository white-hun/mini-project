import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & > * {
        :not(:last-child) {
            margin-botton: 16px;
        }
    }
`;

function PostList(props) {
    const {posts, onClickItem } = props;
    // posts 배열의 map함수를 이용하여 각 post 객체에 대해 PostListItem 컴포넌트를 만들어서 렌더링
    return (
        <Wrapper>
            {posts.map((post, index) => {
                return (
                    <PostListItem
                        key={post.id}
                        post={post}
                        onclick={() => {
                            onClickItem(post);
                        }}
                    />
                );
            })}
        </Wrapper>
    );
}

export default PostList;