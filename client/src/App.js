import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppBar from "./components/AppBar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import NextAdventure from './components/NextAdventure';
import Archive from './components/Archive';
import Dashboard from './components/Dashboard';
import './components/styles/Dashboard.css';
// import ParkList from "./components/ParkList";
// import Button from '@material-ui/core/Button';



class App extends Component {
 render() {
      return (
        <div className ="App">
        <Router basename={'/wheretonext'}>
        <AppBar/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/nextadventure' component={NextAdventure}/>
        <Route exact path='/archive' component={Archive}/>
        <Route exact path='/dashboard' component={Dashboard}/>
        <Route exact path='/signup' component={SignUp}/>
        <Route exact path='/signin' component={SignIn}/>
        </Router>
        </div>
      )}
    }

  export default App;
