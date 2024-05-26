/* 액션 타입 선언 */

const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO'

let nextID = 1;
export const addTOdo = (text) => ({
    type: ADD_TODO,
    todo: {
        id: nextID++,
        text
    }
})

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})


/* 초기 상태 선언 */

const initialState = [
    /* 이형태로 넣을예정
{
  id: 1,
  text: '예시',
  done: false
}
*/
]


export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat(action.todo);
        case TOGGLE_TODO:
            return state.map(
                todo => todo.id === action.id ? {...todo, done: !todo.done} : todo
            );
        default :
            return state;
    }
}
