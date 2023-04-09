/**
 * 当前模块完成store的创建和中间件的注册
 */

import  {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers/root.reducer'

import createSagaMiddleware from 'redux-saga'
import todoSaga from './saga/todo.saga'

const  sagaMiddleware =  createSagaMiddleware

const store = createStore(rootReducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(todoSaga)

export default store
// applyMiddleware 、createSagaMiddleware 用来注册中间件
//todoSaga  、applyMiddleware(sagaMiddleware) sagaMiddleware.run(todoSaga)用来运行中间件