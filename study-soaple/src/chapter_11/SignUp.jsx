import React, {useState} from "react";

function SignUp(props){
    const [name, setName] = useState("");
    const [gender, setGender] = useState("남자");
    const handleChangeName = (event)=>{
        setName(event.target.value);
    } // ƒorm 에서 받아오는 데이터여서 그런듯
    const handleChangeGender = (event)=>{
        setGender(event.target.value);
    } // ƒorm 에서 받아오는 데이터여서 그런듯

    const handleSubmit = (event)=>{
        alert(`이름 : ${name}, 성별 : ${gender}`);
        event.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>이름</label>
            <input type="text" value={name} onChange={handleChangeName}/>
            <br/>
            <label>성별</label>
            <select value={gender} onChange={handleChangeGender}>
                <option value={"남자"}>남자 </option>
                <option value={"여자"}>여자 </option>
            </select>
            <button type="submit">제출</button>
        </form>
    )
}

export default SignUp;
