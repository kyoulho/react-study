import React from "react";

// 이름을 입력하기 위한 텍스트 박스를 반환한다.
const Name = () => {
    // input 요소의 onchange 이벤트에 대한 콜백 함수를 정의한다.
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };

    return (
        // style 객체의 키는 캐멀 케이스가 된다.
        <div style={{padding: '16px', backgroundColor: 'grey'}}>
            {/* for 대신 htmlFor 를 사용*/}
            <label htmlFor="name">
                이름
            </label>
            {/* class 나 onchange 대신, className 이나 onChange 를 사용*/}
            <input id="name" className="input-name" type="text" onChange={onChange}/>
        </div>
    )
};

export default Name