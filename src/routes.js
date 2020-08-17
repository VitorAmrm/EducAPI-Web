import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import LoginPage from './pages/login/index'
import Home from './pages/home/index'
import CreateContext from './pages/createcontext/index'
import CreateChallenge from './pages/createchallenge/index'

export default function Routes(){
    return (
        <Router>
                <Switch>
                    <Route path="/" exact component={LoginPage}></Route>
                    <Route path="/home"  component={Home}></Route>
                    <Route path="/createcontext"  component={CreateContext}></Route>
                    <Route path="/createchallenge"  component={CreateChallenge}></Route>
                </Switch>
        </Router>
    );
}