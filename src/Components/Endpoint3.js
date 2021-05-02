import '../App.css';
import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from 'react-bootstrap'
import {fiveThingsURL} from "../settings"



function Endpoint3() {


    useEffect(() => {
  fetchItems();
    }, []);
  
    const [name, setName] = useState ([]);
  

  const fetchItems =  async () => { 
    const data = await fetch(fiveThingsURL);
  
    const names = await data.json();
    //console.log(items);
    setName(names);
  
  
  }
  
    return (
      <div>
        <ReactBootStrap.Table striped bordered hover variant="sm" >
        <thead>
    <tr>
   
      <th>Name</th>
      <th>Height</th>
      <th>Gender</th>
    </tr>
    </thead><tbody>
  {name.map(test  => (
    <tr key={test.name}>
      
      
      <td>{test.name}</td> <td>{test.height}</td> <td>{test.gender}</td>
      </tr>
      
      
    
  ))}
  </tbody>
  </ReactBootStrap.Table>
      </div>
    );
  }

export default Endpoint3;
