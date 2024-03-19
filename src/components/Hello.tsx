const Hello = () => {
    // 클릭 시 호출되는 함수
    const onClick = () => {
        // 얼럿을 나타낸다.
        alert('hello');
    }
    const text = 'Hello,React';

    // 텍스트를 자식으로 갖는 div 요소를 반환
    return (
        <div onClick={onClick}>
            {text}
        </div>
    )
}

// 외부로부터 Hello를 읽을 수 있도록 익스포트
export default Hello