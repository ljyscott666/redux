import React, {Component} from "react";

class Header extends Component {


   render() { 
    return( 
        
            <header className="header">
				<h1>todos</h1>
				<input className="new-todo" placeholder="还有什么任务没有完成?"  />
			</header>

        
    )
   }



}
export default Header