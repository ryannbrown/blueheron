import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Container, Nav, Button, Col, Row, Card } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Homepage from "./pages/Homepage/index"
import Contact from "./pages/Contact/index"
import createHistory from 'history/createBrowserHistory';


function App() {


  const history = createHistory({
    basename: process.env.PUBLIC_URL,
  });

  return (
    <div className="App">
         <Router history = {history}>
           <Switch>
             <Route path="/contact" component={Contact}/>
             <Route path="/" component={Homepage}/>
           </Switch>
         </Router>
    </div>
  
  );
}

export default App;
