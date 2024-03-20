import {useReducer} from "react";

// reducer 가 받은 action 타입을 정의한다
type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET';

const reducer = (currentCount: number, action: Action) => {
    switch (action) {
        case "INCREMENT":
            return currentCount + 1;
        case "DECREMENT":
            return currentCount - 1;
        case "DOUBLE":
            return currentCount * 2;
        case "RESET":
            return 0;
        default:
            return currentCount;
    }
}

type CounterProps = {
    initialValue: number
}

const CounterReducer = (props: CounterProps) => {
    const {initialValue} = props;
    /*
      reducer(현재 상태, action){
          return 다음 상태
      }

      const [현재 상태, dispatch] = useReducer(reducer, reducer에 전달되는 초기 상태)
     */
    const [count, dispatch] = useReducer(reducer, initialValue)

    return (
        <div>
            <p>Count: {count}</p>
            {/*  dispatch 함수에 action을 전달해 상태를 업데이트한다 */}
            <button onClick={() => dispatch('DECREMENT')}> -</button>
            <button onClick={() => dispatch('INCREMENT')}> +</button>
            <button onClick={() => dispatch('DOUBLE')}> x2</button>
            <button onClick={() => dispatch('RESET')}> Reset</button>
        </div>
    );
};

export default CounterReducer