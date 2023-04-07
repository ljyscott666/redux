import { ADDPERSON } from "../../ActionTypes/Person.actions.types"

const initialState = [ {
  id:1,
  name:'zoe'
},{
  id:2,
  name:'scott'
}]



export default  function PersonReducer(state = initialState,action) {
    switch(action.type) {
      case ADDPERSON:
        return [
            ...state,
            //用展开操作来处理初始值 因为是数组所以不能直接用{}
            action.payload
            //这边用payload是为了用action 的键  payload不是个固定的名字
        ]
        default: return state
    }
  
}