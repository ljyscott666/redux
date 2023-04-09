import { combineReducers} from "redux"
import todoReducer from "./todo.reducer"
/**
 * 根reducer用来合并reducer操作
 */
export default combineReducers({
    todoReducer:todoReducer
})