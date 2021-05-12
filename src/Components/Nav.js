import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container'

function Nav() {
  const navStyle = {
    color: " white",
  };

  return (
    <nav>
       
       <Row>
            <Col>  
      <Link style={navStyle} to="/">
        <h3>Home</h3>
      </Link>
      </Col>
     </Row>
      
        
          <Row><ul className="links">
            
            
            <Col sm={1}>
            <Link style={navStyle} to="/top5">
              <li >Top 5 stocks</li>
            </Link>
            </Col>
            <Col sm={2}>
            <Link style={navStyle} to="/endpoint2">
              <li >Pinned stocks</li>
            </Link>
            </Col>
            <Col sm={6}>
            <Link style={navStyle} to="/endpoint3">
              <li class="Align-Left">Find stocks to pin</li>
            </Link>
            </Col>
            <Col sm={1}>
            <Link style={navStyle} to="/notifications">
              <li>Notifications</li>
            </Link>
            </Col>
            <Col sm={1}>
            <Link style={navStyle} to="/about">
              <li>Account</li>
            </Link>
            
            </Col>
            <Col sm={1}>
              <Link style={navStyle} to="/logout">
                <li>Logout</li>
              </Link>
            </Col>
           </ul></Row>
        
     
      
    </nav>
  );
}
function NavNotLoggedIn() {
  const navStyle = {
    color: " white",
  };

  return (
    <nav>
      <Link style={navStyle} to="/">
        <h3>Home</h3>
      </Link>

      <ul className="links">
        <Link style={navStyle} to="/login">
          <li>Login</li>
        </Link>

        <Link style={navStyle} to="/signup">
          <li>Sign up</li>
        </Link>

        <Link style={navStyle} to="/about">
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
export { NavNotLoggedIn };
