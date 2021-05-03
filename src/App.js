
import './App.css';
import About from './Components/About';
import Endpoint1 from './Components/Endpoint1'
import Endpoint2 from './Components/Endpoint2'
import Endpoint3 from './Components/Endpoint3'
import { Link } from 'react-router-dom'
import Nav, { NavNotLoggedIn } from './Components/Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react"
import { fetchData } from "./Components/decodeJWT";
import loginWithUser from "./Components/Login";
import logoutUser from "./Components/Logout";
import { NavDropdown } from 'react-bootstrap';
import AddUserUI from "./Components/AddUser";


function App() {
  const [loggedIn, setLoggedIn] = useState(false)


  function LogIn({ login }) {
    const init = { username: "", password: "" };
    const [loginCredentials, setLoginCredentials] = useState(init);

    const performLogin = (evt) => {
      console.log(loginCredentials)
      //evt.preventDefault();
      login(loginCredentials.username, loginCredentials.password);
      
      
      
    }
    const onChange = (evt) => {
      setLoginCredentials({ ...loginCredentials, [evt.target.id]: evt.target.value })
    }

    return (
      <div>
        <h2>Login</h2>
        
        <form onChange={onChange} >
          <input placeholder="User Name" id="username" />
          <input placeholder="Password" id="password" />
          
          <Link to="/">
          <button type="button" id="btnn" onClick={performLogin}>Login</button>
            </Link>
        </form>
        
      </div>
    ) 

  }

 
  const logout = () => {
    setLoggedIn(false)
    return (<div>
        {logoutUser()}
      </div>
    )
  }

  const login = (user, pass) => {
    LoginPage();
    loginWithUser(user, pass)
      .then(res => setLoggedIn(true));

  }
  const logoutBtn = () => {
    return (
      <div>
        <p>Are you sure you want to log out?</p>
        <Link to="/">
          <button type="button" onClick={logout}>
            Logout
     </button>
        </Link>

      </div>
    )

  }
  const signup = () => {
    return AddUserUI();

  }


  const ShowLandingPage = () => (

    !loggedIn ? (<Router>
      <div className="App">
        <NavNotLoggedIn />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={signup} />


          <Route path="/endpoint1" component={Endpoint1} />
        </Switch>

      </div>
    </Router>)

      : (
        <div>
        <Router>
          <div className="App">
            <Nav />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/logout" component={logoutBtn} />

              <Route path="/endpoint1" component={Endpoint1} />
              <Route path="/endpoint2" component={Endpoint2} />
              <Route path="/endpoint3" component={Endpoint3} />
            </Switch>

          </div>
        </Router>

      </div>)

  )






  function LoginPage() {
    return (
      <LogIn login={login} />)

  }

  return (


    <div className="App">
      <div>

        <ShowLandingPage />


      </div>
    </div>
  );

}


const Home = () => (
  <div>
    <h1>hey</h1>
  </div>
)

export default App;
