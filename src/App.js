
import './App.css';
import About from './Components/About';
import Endpoint1 from './Components/Endpoint1'
import Endpoint2 from './Components/Endpoint2'
import Endpoint3 from './Components/Endpoint3'
import { Link, useHistory } from 'react-router-dom'
import Nav from './Components/Nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from "react"
import {fetchData} from "./Components/decodeJWT";
import loginWithUser from "./Components/Login";
import logoutUser from "./Components/Logout";
import {NavDropdown} from 'react-bootstrap';
import AddUserUI from "./Components/AddUser";

function LogIn({ login }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const performLogin = (evt) => {
    console.log(loginCredentials)
    evt.preventDefault();
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
        <button onClick={performLogin}>Login</button>
      </form>
    </div>
  )

}
function LoggedIn() {
  const [dataFromServer, setDataFromServer] = useState("Loading...")

  useEffect(() => {
    fetchData().then(data => setDataFromServer(data.msg));
  }, [])

  return (
    <div>
      <h2>Data Received from server</h2>
      <h3>{dataFromServer}</h3>
    </div>
  )

}

function App() {
  const [loggedIn, setLoggedIn] = useState(false)


const history = useHistory();
  const logout = () => {
    // localStorage.clear();
    // history.push("http://localhost:3000/");
     setLoggedIn(false)
     return(
      <Link to="/">
    {logoutUser()}
    </Link>
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
  
  <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={LoginPage}/>
        <Route path="/logout" component={logoutBtn}/> 
        <Route path="/signup" component={signup}/> 
        {/* <Item onClick={logout}>Logout</Item> */}
        
        <Route path="/endpoint1" component={Endpoint1} />
        <Route path="/endpoint2" component={Endpoint2} />
        <Route path="/endpoint3" component={Endpoint3} />
      </Switch>
   
    </div>
  </Router>
  
)
function LoginPage(){
  return(
  !loggedIn ? (<LogIn login={login} />) :
        (<div>
          
          <ShowLandingPage/>
          
        </div>)
)}

  return (


    <div className="App">
       {!loggedIn ? (<LogIn login={login} />) : 
        (<div>
          
        <ShowLandingPage/>
         
          
        </div>)}
    </div>
  );
 
}


const Home = () => (
  <div>
    <h1><LoggedIn/></h1>
  </div>
)

export default App; 
