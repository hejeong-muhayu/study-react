import React, {useRef, useState} from 'react';
import UserList from './UserList';
import CreateUser from "./CreateUser";

function App() {
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com'
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com'
        }
    ]);

    const [inputs, setInputs] = useState({
        username: "",
        email: ""
    });
    const {username, email} = inputs;
    const nextId = useRef(4);

    const onChange = (e) => {
        const {name, value} = e.target
        setInputs({
            ...inputs,
            [name]: value
        });
    }
    const onCreate = () => {
        const user = {
            id: nextId.current,
            username: username,
            email: email
        }
        // setUsers([...users, user]); //spread 연산자로 배열 추가
        setUsers(users.concat(user)); // concat 함수로 배열 추가 기존의 배열울 수정하지 않고 새로운 원소 추가


        setInputs({
            username: '',
            email: ''
        });

        nextId.current += 1;
    };

    const onRemove = (id) => {
        setUsers(users.filter(user => user.id !== id));
    }

    return <div>
        <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}></CreateUser>
        <UserList users={users} onRemove={onRemove}/>
    </div>;
}

export default App;
