import React from "react";
import "./Navbar.css"
import profile from "./images/profile_picture.jpg"
import searchIcon from "./images/searchIcon.png"


function NavBar() {
  

  return <div className="navbar">
    
    {/*
    TODO: Once we have a logo, insert into img src
    <img src="logo.jpg" alt="LOGO" width="75"></img> */}
    
    <p className="logo">LOGO</p>

    <div className="searchBar">
      <img class="searchIcon" src={searchIcon} alt="SrIc" width="20"></img> 
      <input class="searchInput" type="text" placeholder="Search: e.g. Coding Hub" width="500"></input>
    </div>

    <div class="profilePicture">
      <img className="profilePic" src={profile} alt="PROFILEPIC" width="52"></img>
      <p class="profileName">Joseph Schiro</p>

    </div>

  </div>

}

export default NavBar;
                                                         