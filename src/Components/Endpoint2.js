import "../App.css";
import React, { useState, useEffect } from "react";
import { fetchUsername } from "./decodeJWT";
import { pinnedStocks } from "../settings";
import * as ReactBootStrap from "react-bootstrap";

function Endpoint2() {
  
  useEffect(() => {
    
    fetchItems();
  }, []);

  const [pinned, setPinned] = useState([]);


  const fetchItems = async () => {
    const data = await fetch(`${pinnedStocks}${fetchUsername()}`);
    //console.log(`URL: ${pinnedStocks}${fetchUsername()}`)
    const pins = await data.json();

   
    setPinned(pins)
    
  };


  return (
    
    <div>
      <ReactBootStrap.Table striped bordered hover variant="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Open</th>
            <th>Low</th>
            <th>High</th>
            <th>Close</th>

          </tr>
        </thead>
       
      
         {pinned.map((item) => (
          <tr key={item.data[0].symbol}>
            <td>{item.data[0].symbol}</td>
            <td>{item.data[0].date}</td>
            <td>{item.data[0].open}</td>
            <td>{item.data[0].low}</td>
            <td>{item.data[0].high}</td>
            <td>{item.data[0].close}</td>
          </tr>
        ))} 
      </ReactBootStrap.Table>
    </div>
  );
}
export default Endpoint2;