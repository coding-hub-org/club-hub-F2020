import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown"; 
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Welcome from "./routes/Welcome";
import Login from "./routes/Login";
import About from "./routes/About";
import Home from "./routes/Home";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div>

      <NavBar />
      
      <div>
        <Router>
          <Switch>

            <Route path="/welcome">
              <Welcome />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
           

          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;