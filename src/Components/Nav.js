import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom'
import facade from "../apiFacade";
import App from "../App"

function Nav() {

    const navStyle = {
        color: ' white'
    }
   

    return (
        <nav>
             
            <Link style={navStyle} to='/'>
                <h3>Home</h3>
            </Link>

           <ul className="links">
                <Link style={navStyle} to="/logout">
                   <li>Logout</li>
                </Link>
                
              
                <Link style={navStyle} to="/signup">
                   <li>signup</li>
                </Link>
                

                <Link style={navStyle} to='/about'>
                    <li>about</li>
                </Link>


                <Link style={navStyle} to='/endpoint1'>
                    <li>Users</li>
                </Link>

                <Link style={navStyle} to='/endpoint2'>
                    <li>Chuck norris jokes</li>
                </Link>

                <Link style={navStyle} to='/endpoint3'>
                    <li>List of StarWars characters</li>
                </Link>


            </ul>
        </nav>
    );
}

export default Nav;
