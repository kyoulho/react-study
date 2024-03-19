import {useState} from "react";

type CounterProps = {
    initialValue: number
}

const CounterState = (props: CounterProps) => {
    const {initialValue} = props;
    // 카운트를 유지하는 첫 번째 상태를 useSate() 로 선언한다. 인수에는 초깃값을 지정한다.
    const [count, setCount] = useState(initialValue)

    return (
        <div>
            <p>Count: {count}</p>
            {/*  인수를 전달하면 해당 값이 다음 상태가 되며 */}
            <button onClick={() => setCount(count - 1)}>
                -
            </button>
            {/*  함수를 전달하면 함수의 반환값이 다음 상태가 된다. */}
            <button onClick={() => setCount((count) => count + 1)}>
                +
            </button>
        </div>
    );
};

export default CounterState