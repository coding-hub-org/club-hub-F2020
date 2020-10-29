import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import {NavDropdown, Nav, Form} from "react-bootstrap";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from "./routes/Login";
import About from "./routes/About";
import Home from "./routes/Home";

//nelson was here

//anthony was here

// chris was here

function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <div>
        <Router>
          <Switch>
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
    </div>
  );
}

export default App;
