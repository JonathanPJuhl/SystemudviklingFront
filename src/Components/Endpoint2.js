import "../App.css";
import React, { useState, useEffect } from "react";
import { fetchUsername } from "./decodeJWT";
import { pinnedStocks } from "../settings";
import * as ReactBootStrap from "react-bootstrap";

function Endpoint2() {
  
  useEffect(() => {
    fetchItems().then(keepfetching());
  }, []);

  const [pinned, setPinned] = useState([]);
  const [item, setItems] = useState([]);
  let arr = [];

  function keepfetching() {
   
    pinned.map(function  (e){
      console.log(e.stockticker)
      return fetchInfo(e.stockTicker) 
    })
    console.log(arr);
    setItems(arr);
    console.log("item" + Object.values(item))
    // for (let i = 0; i < pinned.length-1; i++) {
      
    //   if (i % 4 == 0) {
    //     setTimeout(() => {
    //       fetchInfo(pinned[i].stockTicker);
    //     }, 3000);
    //   } else {
    //     console.log(pinned[i].stockTicker);
    //     fetchInfo(pinned[i].stockTicker);
    //   }
    // }
  };

  const fetchInfo = async (ticker) => {
    const data = await fetch(
      `https://api.marketstack.com/v1/eod/latest?access_key=5feeee1a869fedc6e6e24e62c735bc22&symbols=${ticker}`
    );

    const items = await data.json();
    console.log(Object.values(items.data));
    console.log("symsym" + items.data[0].symbol);
    arr.push(items.data[0]);
    //setItems(...item, items.data);
    
  };

  const fetchItems = async () => {
    const data = await fetch(`${pinnedStocks}${fetchUsername()}`);
    console.log(`URL: ${pinnedStocks}${fetchUsername()}`)
    const pins = await data.json();
    setPinned( pins);
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

        {item.map((item) => (
          <tr key={item.low}>
            <td>{item.symbol}</td>
            <td>{item.date}</td>
            <td>{item.open}</td>
            <td>{item.low}</td>
            <td>{item.high}</td>
            <td>{item.close}</td>
          </tr>
        ))}
      </ReactBootStrap.Table>
    </div>
  );
}

export default Endpoint2;
