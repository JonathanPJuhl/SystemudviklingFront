import "../App.css";
import React, { useState, useEffect } from "react";
import { fetchUsername } from "./decodeJWT";
import { pinnedStocks } from "../settings";
import * as ReactBootStrap from "react-bootstrap";

function Endpoint2() {
  
  useEffect(() => {
    setPinned([]);
    setItems([]);
    fetchItems().then(keepfetching());
  }, []);

  const [pinned, setPinned] = useState([]);
  const [item, setItems] = useState([]);
  let arr = [];

  function keepfetching() {
   
    pinned.map(function  (e){
      console.log(e.stockticker)
       fetchInfo(e.stockTicker) 
    })
    console.log(arr);
    setItems(arr);
    console.log("item" + Object.values(item))

  };

  const fetchInfo = async (ticker) => {
    const data = await fetch(
      `https://api.marketstack.com/v1/eod/latest?access_key=5feeee1a869fedc6e6e24e62c735bc22&symbols=${ticker}`
    );

    const items = await data.json();
    console.log(Object.values(items.data));
    console.log("symsym" + items.data[0].symbol);
    arr.push(items.data[0]);
    //setItems(...item, items.data[0]);
    
  };

  const fetchItems = async () => {
    const data = await fetch(`${pinnedStocks}${fetchUsername()}`);
    console.log(`URL: ${pinnedStocks}${fetchUsername()}`)
    const pins = await data.json();
    setPinned( pins);
  };
  console.log("pinned bf return: " + Object.values(pinned));
  console.log("item bf return: " + Object.values(item));
  console.log("arr bf return: " + Object.values(arr));

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

        {arr.map((item) => (
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
//----------------

// import "../App.css";
// import React, { useState, useEffect } from "react";
// import { fetchUsername } from "./decodeJWT";
// import { pinnedStocks } from "../settings";
// import * as ReactBootStrap from "react-bootstrap";

// function Endpoint2() {
  
//   useEffect(() => {
//     fetchItems()
//   }, []);

//   const [pinned, setPinned] = useState([]);
//   const [item, setItems] = useState([]);
//   let arr = [];

//   function keepfetching() {
   
//     pinned.map(function  (e){
//       console.log(e.stockticker)
//        fetchInfo(e.stockTicker) 
//     }).then(setItems(arr))
//     .then(console.log(arr))
//     .then(console.log("item" + Object.values(item)))
    
//     //setItems(arr);
    

//   };

//   function fetchInfo(ticker) {
//     fetch(
//       `https://api.marketstack.com/v1/eod/latest?access_key=5feeee1a869fedc6e6e24e62c735bc22&symbols=${ticker}`
//     ).then(res => res.json())
//     .then(data => {
//       console.log("found data" + data);
//       setItems(...item, data);
//       arr.push(data[0]);
//     })
//   };

//   function fetchItems() {
//     fetch(`${pinnedStocks}${fetchUsername()}`).then(res => res.json())
//     .then(data => {
//       console.log("found data" + data);
//       setPinned(data);
//     }).then(keepfetching()).then(returnRes())
//   };


//   // const fetchItems = async () => {
//   //   const data = await fetch(`${pinnedStocks}${fetchUsername()}`);
//   //   console.log(`URL: ${pinnedStocks}${fetchUsername()}`)
//   //   const pins = await data.json();
//   //   setPinned( pins);
//   // };
//   // console.log("pinned bf return: " + Object.values(pinned));
//   // console.log("item bf return: " + Object.values(item));
//   // console.log("arr bf return: " + Object.values(arr));

//   function returnRes(){ 
//     return(
//     <div>
//       <ReactBootStrap.Table striped bordered hover variant="sm">
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Date</th>
//             <th>Open</th>
//             <th>Low</th>
//             <th>High</th>
//             <th>Close</th>

//           </tr>
//         </thead>

//         {arr.map((item) => (
//           <tr key={item.low}>
//             <td>{item.symbol}</td>
//             <td>{item.date}</td>
//             <td>{item.open}</td>
//             <td>{item.low}</td>
//             <td>{item.high}</td>
//             <td>{item.close}</td>
//           </tr>
//         ))}
//       </ReactBootStrap.Table>
//     </div>
//   );}
// }

// export default Endpoint2;
