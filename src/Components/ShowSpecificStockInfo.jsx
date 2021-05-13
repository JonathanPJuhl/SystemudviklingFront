import "../App.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";


const SpecificStockInfo = () =>{
    useEffect(() => {
    
        fetchItems();
      }, []);
  let ticker = localStorage.getItem("stock_symbol");
    
          const [specific, setSpecific] = useState([]);
        
    
        const fetchItems =  async () => { 
          const data = await fetch(`https://api.marketstack.com/v1/eod?access_key=5feeee1a869fedc6e6e24e62c735bc22&symbols=${ticker}`
          );
    
          const item = await data.json();
             
             setSpecific(item.data);
    console.log(specific);
    
    
        }
        
         
return(
    <div>
        <h3>Stock movements for {ticker}</h3>
    <ReactBootStrap.Table striped bordered hover variant="sm" >
 <thead>
<tr>

<th>Stock</th>
<th>Date</th>
<th>Open</th>
<th>Low</th>
<th>High</th>
<th>Close</th>

</tr>
</thead>


     {specific.map(item => (
      <tbody key={item.symbol}>
         <td>{item.symbol}</td>
         <td>{item.date.substring(0,10)}</td>
         
         <td>{item.open}</td>
         <td>{item.low}</td>
         <td>{item.high}</td>
         <td>{item.close}</td>
     </tbody>
)) }




</ReactBootStrap.Table> 

   </div>
   );
function HandleOnclick(){

}
}

export default SpecificStockInfo;

