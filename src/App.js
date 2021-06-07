import React from "react";
import {
  BrowserRouter as Router, Route, Switch, Redirect 
 } from 'react-router-dom';
import "./App.css";
import Nav from "./components/Nav/nav";
import UseReducer from "./components/UseReducer/useReducer";
import LifeCycle from "./components/LifeCycle/lifeCycle";
import UseContext from "./components/UseContext/componentA";
import UseContextWithUseReducer from "./components/UseContextUseReducer/index";


const App = () => {
  return (
    <Router>
    <div className='App'>
      <Nav />
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/useReducer' component={UseReducer} />
      <Route exact path='/lifeCycle' component={LifeCycle} />
      <Route exact path='/useContext' component={UseContext} />
      <Route exact path='/useContextWithuseReducer' component={UseContextWithUseReducer} />
      </Switch>
    </div>
    </Router>
  )
}

const Home = () => {
  return (
    <div>
     <h1> Home Page</h1>  
    </div>
  )
}

export default App;
