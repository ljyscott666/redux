/* *
*  1、需要可以发送请求获取数据   load_todo
*  2、当异步操作完成之后还需要触发新的指令  load_todo_success
*
*/

//import {createAction } from "redux-actions";
//用createAction合并指令
import {createAction} from 'redux-action'

export const load_todo =createAction('load_todo');
export const load_todo_success =createAction('load_todo_success');
//等效于 export const load_todo =() => ({type:'load_todo'})，本质上就是那个dispatch
//这两个指令一个是原本该有的同步指令 load——todo ，然后当异步完成后，要做load_todo_success
//因为这里面考虑异步所有考虑两步走
//指定定义完成，指定服务于reducer