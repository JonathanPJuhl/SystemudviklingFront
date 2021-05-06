
import '../App.css';
import React, {useState, useEffect} from 'react';
import {fetchUsername} from "./decodeJWT"
import {pinnedStocks} from "../settings";
import * as ReactBootStrap from "react-bootstrap";
let arr = [];
function Endpoint2() {

  useEffect(() => {
fetchItems();
  }, []);

  const [pinned, setPinned] = useState ([]);
  const [item, setItems] = useState ([]);


const fetchItems =  async () => { 
  const data = await fetch(`${pinnedStocks}${fetchUsername()}`);

  const pins = await data.json();
  setPinned(pins);



let pinns = pinned.map(function(e){
        
  return e.stockTicker;
})



const fetchInfo =  async (ticker) => { 
  const data = await fetch(`https://api.marketstack.com/v1/eod/latest?access_key=5feeee1a869fedc6e6e24e62c735bc22&symbols=${ticker}`
  );

  const items = await data.json();
     console.log(items.data);
    // setItems(items.data);
    arr.push(items.data)
}
for(let i=0; i<pinns.length-1; i++){
  fetchInfo(pinns[i]);
}
console.log("array: " + item)
setItems(arr);
//console.log("done" + JSON.stringify(item[0].symbol))
}
  return (
  
    <div>
       
       <ReactBootStrap.Table striped bordered hover variant="sm" >
    <thead>
<tr>

  <th>Name</th>
  <th>Tickers</th>
  <th>Add to pinned</th>
</tr>
</thead>


        {item.map(item => (
         <tbody key={item.high}>
            
         
            <td>{item.symbol}</td>
            
        </tbody>
 )) }



</ReactBootStrap.Table> 


</div>
  );
}

export default Endpoint2;
