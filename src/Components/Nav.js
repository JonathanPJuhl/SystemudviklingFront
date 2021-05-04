import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom'


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
                

                <Link style={navStyle} to='/about'>
                    <li>about</li>
                </Link>


                <Link style={navStyle} to='/Pinned'>
                    <li>Pinned</li>
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
function NavNotLoggedIn() {

    const navStyle = {
        color: ' white'
    }
   

    return (
        <nav>
             
            <Link style={navStyle} to='/'>
                <h3>Home</h3>
            </Link>
            
            <ul className="links">
            <Link style={navStyle} to="/login">
                   <li>Login</li>
                </Link>
              
                <Link style={navStyle} to="/signup">
                   <li>Sign up</li>
                </Link>
                

                <Link style={navStyle} to='/about'>
                    <li>About</li>
                </Link>


                {/* <Link style={navStyle} to='/endpoint1'>
                    <li>Users</li>
                </Link> */}

            </ul>
        </nav>
    );
}

export default Nav;
export {NavNotLoggedIn};
