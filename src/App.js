import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Component } from "react";


class App extends Component {
  
 
 render() { 
  return (
    <div className="todoapp">
    <Header />
    <Main />
    <Footer/>
    </div>
  );
}
}
export default App;
