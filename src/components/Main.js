import React, {Component} from "react";
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import * as todoActions from '../store/actions/todo.actions'





class Main extends Component {

componentDidMount( )  {
//调用具体的指令函数，触发数据获取操作 
//load_todo指令函数来做todoaction里面
    this.props.load_todo()
}

   render() { 
    return( 
      
        <section className="main">
      
        <input className="toggle-all" type="checkbox" />
        <ul className="todo-list">
            
           { this.props.todos.map(item =>(
            <li key={item.id}>
              
                <div className="view">
                    <input className="toggle" type="checkbox" checked />
                    <label>{item.taskName}</label>
                    <button className="destroy"></button>
                </div>
             
                <input className="edit"/>
            </li>
          )) }
        </ul>
    </section>



    )
   }



}

//{ this.props.todos.map(item =>(  这里面的todos是从todos:state.todoReducer.todos
//里面来的 然后用map方法将其展开并渲染

//1、获取store当中的数据
const mapStateToProps = (state) =>({
    todos:state.todoReducer.todos
})

//2 处理 dispatch函数

const mapDispatchToProps =(dispatch ) => ({
...bindActionCreators(todoActions, dispatch)})
//todoActions 里面装的是指令信息
//由于bindActionCreators（）这样是一个对象 所以用...展开

export default connect(mapStateToProps,mapDispatchToProps)(Main)