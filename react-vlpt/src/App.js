import React, {useCallback, useMemo, useRef, useState} from 'react';
import UserList from './UserList';
import CreateUser from "./CreateUser";

function App() {
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            active: true
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            active: false
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com',
            active: false
        }
    ]);

    function countActiveUsers(users) {
        console.log('활성 사용자 수를 세는중...');
        return users.filter(user => user.active).length;
    }

    // const count = countActiveUsers(users);
    const count = useMemo(() => countActiveUsers(users), [users]);

    const [inputs, setInputs] = useState({
        username: "",
        email: ""
    });
    const {username, email} = inputs;
    const nextId = useRef(4);

    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setInputs(inputs => ({
            ...inputs,
            [name]: value
        }));
    }, []);
    const onCreate = useCallback(() => {
        const user = {
            id: nextId.current,
            username: username,
            email: email
        }
        // setUsers([...users, user]); //spread 연산자로 배열 추가
        setUsers(users => users.concat(user)); // concat 함수로 배열 추가 기존의 배열울 수정하지 않고 새로운 원소 추가


        setInputs({
            username: '',
            email: ''
        });

        nextId.current += 1;
    }, [username, email]);

    const onRemove = useCallback(
        (id) => {
            setUsers(users => users.filter(user => user.id !== id));

        },
        [],
    );


    const onToggle = useCallback((id) => {
        setUsers(
            users=>
                users.map(user => user.id === id ? {...user, active: !user.active} : user)
        )
    }, []);
    return <div>
        <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}></CreateUser>
        <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
        <div>활성 사용자 수 ㅣ {count}</div>
    </div>;
}

export default App;
