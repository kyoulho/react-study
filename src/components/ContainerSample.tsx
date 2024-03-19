// Container는 빨간색 배경의 박스 안에 제목과 자식 요소를 표시한다.
import React from "react";

const Container = (props: { title: string; children: React.ReactElement }) => {
    const {title, children} = props;

    return (
        <div style={{background: 'red'}}>
            <span>{title}</span>

            {/* props 인 children 을 삽입하면, div 태그가 <p> 여기가 children <p> 를 감싼다. */}
            <div>{children}</div>
        </div>
    )
};

const Parent = () => {
    return (
        // Container 를 사용할 때, 다른 요소를 감싸서 사용한다.
        <Container title="Hello">
            <p>여기가 children</p>
        </Container>
    )
}

export default Parent