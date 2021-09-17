import * as React from "react";
import * as ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserHistory } from "history";
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";


import Menu from "./components/Menu";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe"
import Login from "./components/login"

  
let hashHistory = createBrowserHistory()
function App(){
    return(
        <BrowserRouter basename="/">
            <Menu></Menu>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route path="/aboutme">
                    <AboutMe />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"))