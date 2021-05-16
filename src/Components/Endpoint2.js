import "../App.css";
import React, { useState, useEffect } from "react";
import { fetchUsername } from "./decodeJWT";
import { pinnedStocks, removePin } from "../settings";
import * as ReactBootStrap from "react-bootstrap";

function Endpoint2() {
  const [pinned, setPinned] = useState([]);
  useEffect(() => {
    
    fetchItems();
  }, []);

  



  const fetchItems = async () => {
    const data = await fetch(`${pinnedStocks}${fetchUsername()}`);
    const pins = await data.json();
    setPinned(pins.data)
    console.log(pinned.length)
  };
  function HandleOnclick(evt){
    let value = evt.target.value;
    const fetchItems = async () => {
      console.log(`${removePin}${fetchUsername()},${value}`);
      const data = await fetch(`${removePin}${fetchUsername()},${value}`);
      const removed = await data.json();
      alert(removed.resp)
    };
    fetchItems();
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
            <th>Remove pin</th>

          </tr>
        </thead>
         {pinned.map((e) => (
          <tr key={e.symbol}>
            <td>{e.symbol}</td>
            <td>{e.date.substring(0,10)}</td>
            <td>{e.open}</td>
            <td>{e.low}</td>
            <td>{e.high}</td>
            <td>{e.close}</td>
            <td ><button value={e.symbol} class="buttons" onClick={HandleOnclick}>Remove pin</button></td>
          </tr>
           ))
         }
      </ReactBootStrap.Table>
    </div>
  );
}
export default Endpoint2;