
import React from "react";

function Navbar(){
    return(
        <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold">MyLogo</div>
            <ul className="hidden md:flex space-x-8">
            <li><a href="#" className="hover:text-cyan-400">Portfolio</a></li>
            <li><a href="#" className="hover:text-cyan-400">Services</a></li>
            <li><a href="#" className="hover:text-cyan-400">About</a></li>
            <li><a href="#" className="hover:text-cyan-400">Contact</a></li>
      
            </ul>
           
        </nav>
       
    );
}
export default Navbar;