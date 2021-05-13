import "../App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import { pinStock } from "../settings";  
import SpecificStockInfo from "./ShowSpecificStockInfo"
import {fetchUsername} from "./decodeJWT"
import autocomplete from "./AutocompleteSearch"
import { Link } from "react-router-dom";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'


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
    const handleOnSearch = (string, results) => {
      // onSearch will have as the first callback parameter
      // the string searched and for the second the results.
      console.log(string, results)
    }
  
    const handleOnHover = (result) => {
      // the item hovered
      console.log(result)
    }
  
    const handleOnSelect = (item) => {
      AddStock(item.symbol);
      alert("You just added: " + item.symbol+" to your list of pinned stocks")
    }
  
    const handleOnFocus = () => {
     
    }
  



      return (
        <div>
        
           <ReactSearchAutocomplete
            items={items}

            
            onSearch={handleOnSearch}
            
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
          />
       <ReactBootStrap.Table striped bordered hover variant="sm" >
    <thead>
<tr>

  <th>Name</th>
  <th>Tickers</th>
  <th>Add to pinned</th>
</tr>
</thead>


        {items.map(item => (
         <tbody>
           <tr key={item.symbol}>
             <td class="stretch-to-fit">
            <Link to="/specifistock">
            <button type="button" class="buttons" value={item.symbol} onClick={ShowSpecificStock}>{item.name}</button>
            </Link></td>
            <td >{item.symbol}
            </td>
            <td ><button value={item.symbol} class="buttons" onClick={HandleOnclick}>Pin</button></td>
            </tr>
        </tbody>
 )) }



</ReactBootStrap.Table> 

      </div>
      );
    }
    function HandleOnclick(evt){
      let itemToAddToDB = evt.target.value;
      AddStock(itemToAddToDB);
      
    }
    function ShowSpecificStock(evt){
      let symbol =  evt.target.value;
      localStorage.setItem("stock_symbol", symbol);
      
      
    }
    function AddStock(stockTicker){
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