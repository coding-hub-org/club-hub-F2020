import React from "react";
import "./welcome.css"
import Image1 from "./images/welcome.png"
import LogIn from "./Login"

function Welcome() {

  return <div style={{verticalAlign: "middle"}}>
    <h1 style={{fontSize: 50}}>Hi!</h1>
    <p style={{fontSize: 30}}>Welcome to Club Hub</p>
    <p style={{fontSize: 50}, {color: 'gray'}}>Please Log in with your Plattsburgh account to continue</p>
    <img className="Image" style={{marginTop: 30}} src={Image1} height="350"></img>
    <a href="./login" className="Button">Sign In with your PSU Account</a>

  </div>  

}

export default Welcome;
