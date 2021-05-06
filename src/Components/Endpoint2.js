
import '../App.css';
import React, {useState, useEffect} from 'react';
import {fetchUsername} from "./decodeJWT"
import {pinnedStocks} from "../settings";


function Endpoint2() {

  useEffect(() => {
fetchItems();
  }, []);

  const [pinned, setPinned] = useState ([]);


const fetchItems =  async () => { 
  const data = await fetch(pinnedStocks+fetchUsername()
  );

  const pins = await data.json();
  setPinned(pins);


}

  return (
  
    <div>
{pinned.stockTicker}
{console.log(pinned)}


</div>
  );
}

export default Endpoint2;
