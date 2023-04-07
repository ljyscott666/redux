import React from "react";
import  {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as personActions from '../Store/Reducer/Actions/Person.actions'
//import * as personActions from '.‘ 这句话就是导入指令actions
function Person(props) {

    return (
//以下就是单纯的处理数据 person是个对象可以用map或者filter方法来处理map（）两个参数，第二个是形参，index
/*这个button因为要新增所以要修改数据，所以要把指令发送到reducer里面来接受，然后reducer处理完
以后丢给store在由store传给组件 再渲染 
*/
//addPerson(）是执行函数 用来传递指令
  <div>
     <button onClick={()=> { props.addPerson({id:3,name:'syy'})}}>addUser</button>
     
     <ul>
        {
            props.person.map(item=>{
                return<li key={item.id}>{item.name}</li>
            })
        }
    
     </ul>
  </div>

    )
}



const mapStateToProps = state => ({
   person:state.person 
})

const mapDispatchToProps = dispatch=> ({
      ...bindActionCreators(personActions,dispatch)
})

/*  const mapDispatchToProps = dispatch=> ({
   addPerson(payload) {
        dispatch({type:'addPerson',payload})
    }
   
}) 跟bindActionCreators等效
*/

export default connect(mapStateToProps,mapDispatchToProps)(Person)
