
import React, { useState, useEffect } from "react"
import {createUserURL} from "../settings"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import '../App.css';

function AddUserUI(){
    const init = { username: "", password: "", recoveryquestion: "", answer: ""};
  const [user, setUser] = useState(init);
  
  const handleChange = (evt) => {
    evt.preventDefault();
    let target = evt.target;
    let id = target.id;
    let value = target.value
    setUser({...user, [id]: value});
    
    
}
const handleSubmit = (evt) => {
  evt.preventDefault();
  AddUser(user);
  
}
  

    return (
        <div>
          <Container fluid>
            <form  onChange={handleChange}>
  <Row>
    <Col><input class="stretch-to-fit" type="text" id="username" placeholder="email"></input></Col>
  </Row>
  <Row>
  <Col> <input type="password" class="stretch-to-fit" id ="password" placeholder="password"></input></Col>
  </Row>   
  <Row>
  <Col><input type="password"class="stretch-to-fit" placeholder="password confirmation"></input></Col>
  </Row>   
  <Row>
  <Col> <select class="stretch-to-fit" name="recoveryquestion" id="recoveryquestion">
              <option value="Choose..." selected>Choose...</option>
              <option value="First pets name">First pets name</option>
              <option value="Name of your highschool">Name of your highschool</option>
              <option value="Mothers maiden name">Mothers maiden name</option>
              <option value="Street you grew up on">Street you grew up on</option></select>
              </Col>
  </Row>   
  <Row>
  <Col> <input type="text" class="stretch-to-fit" id="answer" placeholder="Answer for recovery question"></input></Col>
  </Row>   
  <Row>
  <Col> <input type="submit" class="stretch-to-fit" onClick={handleSubmit} value="Submit"></input></Col>
  </Row>   
            
           
            
           

           
           
            </form>
            
            </Container>
        </div>
    )

}



function AddUser(user){
    const options = makeOptions("POST", false,user);
    return fetch(createUserURL, options)
      //.then(res => {setToken(res.token) })
 

    
}
const makeOptions= (method, addToken,body) =>{
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        'Accept': 'application/json',
      }
    }
    // if (addToken && loggedIn()) {
    //   opts.headers["x-access-token"] = getToken();
    // }
    if (body) {
      opts.body = JSON.stringify(body);
      console.log(JSON.stringify(body));
    }
    return opts;
  }

  export default AddUserUI;