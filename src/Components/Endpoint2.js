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
  const [count, setCount] = useState(0);



  const fetchItems = async () => {
    const data = await fetch(`${pinnedStocks}${fetchUsername()}`);
    //console.log(`URL: ${pinnedStocks}${fetchUsername()}`)
    const pins = await data.json();

   
    setPinned(pins)
    console.log(pinned.length)
  };
  const updateCount = () =>{
    setCount(count+1);
  }


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
         {pinned.map((item) => 
           item.data.map((e) => (
          <tr key={e.symbol}>
            <td>{e.symbol}</td>
            <td>{e.date.substring(0,10)}</td>
            <td>{e.open}</td>
            <td>{e.low}</td>
            <td>{e.high}</td>
            <td>{e.close}</td>
            
          </tr>
           ))
        )  }
      </ReactBootStrap.Table>
    </div>
  );
}
export default Endpoint2;