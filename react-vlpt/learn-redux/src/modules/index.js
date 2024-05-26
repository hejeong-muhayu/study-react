import {combineReducers} from "redux";
import counter from "./counter";
import todos from "./todos";

const rootReducer = combineReducers({
    counter,
    todos
})

export default rootReducer;

// 한 프로젝트에 여러개의 리듀서가 있을대 하나의 리듀서로 합쳐서 사용함


