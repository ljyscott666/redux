import React, {Component} from "react";

class Footer extends Component {


   render() { 
    return( 
       
<footer className="footer">
			
				<span className="todo-count">
					<strong>0</strong> item left
				</span>
			
				<ul className="filters">
					<li>
						<span>All</span>
					</li>
					<li>
						<span>Active</span>
					</li>
					<li>
						<span>Completed</span>
					</li>
				</ul>
			
				<button className="clear-completed">Clear completed</button>
			</footer>

    )
   }



}
export default Footer