import "../App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import { pinStock } from "../settings";  
import SpecificStockInfo, {Link} from "./ShowSpecificStockInfo"
import {fetchUsername} from "./decodeJWT"


function Endpoint3() {


  useEffect(() => {
    fetchItems();
      }, []);


      const [items, setItems] = useState([]);



    const fetchItems =  async () => { 
      const data = await fetch('https://api.marketstack.com/v1/tickers?access_key=5feeee1a869fedc6e6e24e62c735bc22'
      );

      const items = await data.json();
         setItems(items.data);



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


        {items.map(item => (
         <tbody key={item.symbol}>
            
            <td><input type="button" value={item.symbol} onClick={ShowSpecificStock}></input>{item.name}</td>
            
            <td>{item.symbol}</td>
            <td><button value={item.symbol} onClick={HandleOnclick}>Pin</button></td>
        </tbody>
 )) }



</ReactBootStrap.Table> 

      </div>
      );
    }
    function HandleOnclick(evt){
      let itemToAddToDB = evt.target.value;
      AddStock(itemToAddToDB);
      
    }function ShowSpecificStock(evt){
      let itemTolookUp = evt.target.value;
      Link(itemTolookUp)
      
    }
    function AddStock(stockTicker){
     // let tick = {stockTicker: {ticker}}
      const options = makeOptions("POST",stockTicker+","+fetchUsername());
      return fetch(pinStock, options)
      
  }
  const makeOptions= (method,body) =>{
      var opts = {
        method: method,
        headers: {
          "Content-type": "application/json",
          'Accept': 'application/json',
        }
      }
      if (body) {
        opts.body = JSON.stringify(body);
        console.log(JSON.stringify(body));
      }
      return opts;
    }
export default Endpoint3;