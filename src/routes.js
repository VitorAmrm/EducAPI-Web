import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import LoginPage from './pages/login/index'
import RegisterPage from './pages/register/index'
import Home from './pages/home/index'
import CreateContext from './pages/createcontext/index'
import CreateChallenge from './pages/createchallenge/index'
import Gallery from './pages/Gallery/index'

export default function Routes(){
    return (
        <Router>
                <Switch>
                    <Route path="/login" exact component={LoginPage}/>
                    <Route path="/" exact component={Home}/>
                    <Route path="/createcontext"  component={CreateContext}/>
                    <Route path="/createchallenge"  component={CreateChallenge}/>
                    <Route path="/register" component={RegisterPage}/>
                    <Route path="/gallery" component={Gallery}/>
                </Switch>
        </Router>
    );
}