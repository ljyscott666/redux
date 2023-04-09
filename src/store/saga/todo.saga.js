/**
 * 1、完成异步操作
 * 2、重新发送新的指令
 */

import { takeEvery,put} from 'redux-saga'
import axios from 'axios'
import {load_todo_success,load_todo } from '../actions/todo.actions'



//实现 load_todo_data 获取数据同时传递指令
function* load_todo_data() {
  let todoData  = yield axios.get('http://localhost:3000/api/data.json').then(res=>res.data)
  yield put(load_todo_success(todoData))
  //用put方法将todoData里面的数据返回给load_todo_success
}

export default function* todoSaga() {
  yield  takeEvery(load_todo,load_todo_data)
  //异步操作之前的指令是load_todo  异步操作后发出的指令其实是新指令load_todo_data
}
