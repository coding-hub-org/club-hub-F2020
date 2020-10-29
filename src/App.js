import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import {NavDropdown, Nav, Form} from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from "./routes/Login";
import About from "./routes/About";
import Home from "./routes/Home";
import Cards from "./components/Card/Cards.jsx";

//nelson was here

//anthony was here

// chris was here

function App() {
  return (
    
      <div>
        
        <Router>
          <Switch>
          <Route path = "/cards">
              <Cards/>
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            


          </Switch>
        </Router>
      </div>
  );
}

export default App;



