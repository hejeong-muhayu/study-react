import React from 'react';
import styled from "styled-components";
import TodoItem from "./TodoItem";
import {useTodoState} from "./TodoContext";

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px 40px 32px;
    overflow-y: auto;
    //background: gray;
`;

function TodoList(props) {

    const todos = useTodoState();

    return (
        <TodoListBlock>
            {todos.map(todo => (
                <TodoItem text={todo.text} done={todo.done} id={todo.id} key={todo.id}></TodoItem>

            ))}
        </TodoListBlock>
    );
}

export default TodoList;
