import {combineReducers} from 'redux'
//combineReducers 用于拼接不同的reducers
import counterReducer from './Counter.reducer'
import personReducer from './Person.reducer'

export default combineReducers( {
    counter:counterReducer,
    person:personReducer
})

//在这里combineReducer拼接完成了一个新的reducer  
//新reducer里面有  {counter： {count} ，person：[{id:1,name:'zoe' },{id:2,name:'scott'}] }