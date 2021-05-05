import "../App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import { fiveThingsURL } from "../settings";

const Link = (ticker) =>{
    let link2 = `https://api.marketstack.com/v1/eod?access_key=5feeee1a869fedc6e6e24e62c735bc22&symbols=${ticker}`
    return link2;
}
const SpecificStockInfo = () =>{
    useEffect(() => {
        fetchItems();
          }, []);
    
    
          const [items, setItem] = useState([]);
    
    
    
        const fetchItems =  async () => { 
          const data = await fetch(Link
          );
    
          const items = await data.json();
             console.log(items.data);
             setItem(items.data);
    
    
    
        }
return(
    <div>
        <h3>Stock movements for {items.symbol}</h3>
    <ReactBootStrap.Table striped bordered hover variant="sm" >
 <thead>
<tr>

<th>Open</th>
<th>High</th>
<th>Low</th>
<th>Close</th>
<th>Add to pinned</th>
</tr>
</thead>


     {items.map(item => (
      <tbody key={item.symbol}>
         
         <td>{item.open}</td>
         <td>{item.high}</td>
         <td>{item.low}</td>
         <td>{item.close}</td>
         <td><input type="button" value={item.symbol} onClick={HandleOnclick}/></td>
     </tbody>
)) }




</ReactBootStrap.Table> 

   </div>
   );
function HandleOnclick(){

}
}

export default SpecificStockInfo;
export {Link};