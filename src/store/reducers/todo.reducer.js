/**
 * 接受到指令后对数据进行相应的处理
 * 
 * 
 */

import {handleActions as createReducer } from 'redux-action'
//handleActions用来合并reducers
import { load_todo_success } from "../actions/todo.actions"


const intialState = {
    todos:[]
}

export default createReducer({ 
[load_todo_success]:(state,action)=>({
    todos: action.payload
    //不做追加只做覆盖，将获取的到数据给到todos
    //payload在异步操作做完后，会被手动传递过来
})
},intialState)
//createReducer({},) 第一个是一个对象函数，第二是个一个初始值 
//由于load_todo_success是个对象 不能给一个对象赋予另一个对象函数所以这里用【】
