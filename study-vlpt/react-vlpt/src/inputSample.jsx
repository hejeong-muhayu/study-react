import React, {useRef, useState} from 'react';

function InputSample(props) {

    const [inputs, setInputs] = useState({
        name:'',
        nickname:''
    });

    const nameInput = useRef();

    const {name, nickname} = inputs;

    const onChange = (e) => {
        const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 뒤
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };


    const onReset = (e) =>{
        setInputs({
            name:'',
            nickname: ''
        });

        nameInput.current.focus();
    }

    return (
        <div>
            <input name="name" placeholder={"이름"} onChange={onChange} value={name} ref={nameInput}/>
            <input name="nickname" placeholder={"닉네임"} onChange={onChange} value={nickname}/>
            <button onClick={onReset}> 초기화 </button>
            <div>
                <b> 값 : {name} ({nickname})</b>
            </div>
        </div>
    );
}

export default InputSample;
