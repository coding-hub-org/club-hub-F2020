import React from "react";
import "./Navbar.css"
import profile from "./images/profile_picture.jpg"
import searchIcon from "./images/searchIcon.png"
import dropdownJS from "./scripts/dropdown.js"


function NavBar() {
  

  return <div className="navbar">
    
    <img src="logo.jpg" alt="LOGO" width="75"></img>
    
    <div className="middle">
      <div className="searchBar">
        <img class="searchIcon" src={searchIcon} alt="SrIc" width="20"></img> 
        <input class="searchInput" type="text" placeholder="Search: e.g. Coding Hub" width="500"></input>
      </div>
      <button className="searchButton" className="submitButton" type="submit">SEARCH</button>
    </div>

    <div class="profilePicture">
      <img className="profilePic" src={profile} alt="PROFILEPIC" width="50"></img>

      <div class="dropdown">
        <button class="profileName" onclick="myFunction()" class="dropbutton">Joseph Schiro</button>
        <div id="myDropdown" class="dropdown-content">
          <a href="#">Profile</a>
          <a href="#">Friends</a>
          <a href="#">Settings</a>
        </div>
      </div>
    </div>

  </div>

}



export default NavBar;
                                                         