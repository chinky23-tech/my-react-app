
import React from "react";

function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">MyLogo</div>
            <ul className="nav-links">
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
      
            </ul>
           
        </nav>
    );
}
export default Navbar;