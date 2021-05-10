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
import FrequentlyAsked from "./pages/Faq/index.js"
import Cooking from "./pages/Cooking/index"
import Nav from "./components/Nav/index"
import Footer from "./components/Footer/index"
import LoginScreen from "./components/LoginScreen/index"
// import Mobile from "./components/Nav/mobile"
import Contact from "./pages/Contact/index"
import createHistory from 'history/createBrowserHistory';


function App() {


  const history = createHistory({
    basename: process.env.PUBLIC_URL,
  });

  return (
    <div className="App">
       {/* <Mobile></Mobile> */}
       <LoginScreen></LoginScreen>
         <Router history = {history}>
       <Nav></Nav>
           <Switch>
             {/* <Route path="/contact" component={Contact}/> */}
             <Route path="/about" component={About}/>
             <Route path="/cooking" component={Cooking}/>
             <Route path="/faq" component={FrequentlyAsked}/>
             <Route path="/" component={Homepage}/>
           </Switch>       
         </Router>
      <Footer></Footer>
    </div>
  
  );
}

export default App;
