// 이름 없는 함수로 컴포넌트를 정의하고, Text라는 변수에 대힙한다.
// Text 컴포넌트는 부모로부터 `content`라는 데이터를 받는다.
const Text = (props: { content: string }) => {
    const {content} = props;
    return <p className="text">{content}</p>
};

const Message = (props: {}) => {
    const content1 = 'This is parent component';
    const content2 = 'Message uses Text component';

    return (
        <div>
            {/*    content 라는 키로 컴포넌트에 데이터를 전달한다 */}
            <Text content={content1}/>
            <Text content={content2}/>
        </div>
    )
};

export default Message