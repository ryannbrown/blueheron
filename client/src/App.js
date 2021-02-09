import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Homepage from "./pages/Homepage/index"
import About from "./pages/About/index.js"
import Nav from "./components/Nav/index"
import Footer from "./components/Footer/index"
// import Mobile from "./components/Nav/mobile"
import Contact from "./pages/Contact/index"
import createHistory from 'history/createBrowserHistory';


function App() {


  const history = createHistory({
    basename: process.env.PUBLIC_URL,
  });

  return (
    <div className="App">
       <Nav></Nav>
       {/* <Mobile></Mobile> */}
         <Router history = {history}>
           <Switch>
             {/* <Route path="/contact" component={Contact}/> */}
             <Route path="/about" component={About}/>
             <Route path="/" component={Homepage}/>
           </Switch>       
         </Router>
      <Footer></Footer>
    </div>
  
  );
}

export default App;
