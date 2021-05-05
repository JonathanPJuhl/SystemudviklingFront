import {getToken, loggedIn} from './Login'
import handleHttpErrors from "./Errors"
import jwt_decode from "jwt-decode";
import {adminURL, userURL} from "../settings"
let username;
const fetchData = () => {
    const decodeToken = (token) => {
      return jwt_decode(token, { complete: true });
    };
  
    let getDecodedToken = () => {
      let token = getToken();
  
      if (token) {
        return decodeToken(token);
      }
  
      return null;
    };
    let tokenFinished = getDecodedToken();
    
      let roles = tokenFinished.roles;
      username = tokenFinished.username;
      let rolesArr = [];
      rolesArr = roles.split(",");
      let options = "";
      if(rolesArr.includes("admin")){
       options = makeOptions("GET", true); //True adds the token
        return fetch(adminURL, options).then(handleHttpErrors);
      } else
      options = makeOptions("GET", true); //True adds the token
      return fetch(userURL, options).then(handleHttpErrors);
   }
  const makeOptions= (method,addToken,body) =>{
     var opts = {
       method: method,
       headers: {
         "Content-type": "application/json",
         'Accept': 'application/json',
       }
     }
     if (addToken && loggedIn()) {
       opts.headers["x-access-token"] = getToken();
     }
     if (body) {
       opts.body = JSON.stringify(body);
     }
     return opts;
   }
  export {fetchData, username};