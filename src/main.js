import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "bootstrap";
import "./style.css"

import Footer from "./components/footer.js"
import Navbar from "./components/navbar.js"

import Home from "./pages/home.js"
import About from "./pages/about.js"
import Contact from "./pages/contact.js"
import User from "./pages/user.js"
import Characters from "./pages/characters.js"
import Planets from "./pages/planets.js"
import More from "./pages/more.js"

const container = document.querySelector("#app");
const component = (
    <Router>
        <Navbar />
        
       <Characters />
       <Planets />
       <div className="page">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                
                <Route path="/more">
                    <More />
                </Route>
            </Switch>
        </div>

        <Footer />
    </Router>
);

ReactDOM.render(component, container);