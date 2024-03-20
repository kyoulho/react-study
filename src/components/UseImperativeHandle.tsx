import React, {useState, useRef, useImperativeHandle, forwardRef} from "react";

/*
    자식 컴포넌트에서부모로부터 전달된 ref 를 참조하기 위해 사용
    부모 컴포넌트가 자식 컴포넌트에 의존한다.
    props로 대응 가능하다.
 */
const Child = forwardRef((props, ref) => {
    const [message, setMessage] = useState<string | null>(null);

    useImperativeHandle(ref, () => ({
        showMessage: () => {
            const date = new Date();
            const message = `Hello, it's ${date.toLocaleString()} now`;
            setMessage(message);
        },
    }));

    return <div>{message !== null ? <p>{message}</p> : null}</div>;
});

export const Parent = () => {
    const childRef = useRef<{ showMessage: () => void; }>(null);

    const onClick = () => {
        if (childRef.current !== null) {
            // 자식의 useImperativeHandle 에서 지정된 값을 참조
            childRef.current.showMessage();
        }
    };

    return (
        <div>
            <button onClick={onClick}>Show Message</button>
            <Child ref={childRef}/>
        </div>
    );
};