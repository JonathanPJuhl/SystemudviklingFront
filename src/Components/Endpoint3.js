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
  
    let names = []
    names = await data.json();
    let dataa =  names.map(datas =>(
      datas.data.name
      
      )
      )
    setName(dataa);
    
  
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
       {console.log(name)}
  {name.map(test  => (
    <tr key={test}>

      <td>{test}</td>  <td>{test}</td> <td>{test}</td> 
      </tr>
   
  ))}
  </tbody>
  </ReactBootStrap.Table> 
      </div>
    );
  }

export default Endpoint3;
