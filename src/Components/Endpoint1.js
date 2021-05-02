
import '../App.css';
import React, {useState, useEffect} from 'react';


function Endpoint1() {

  useEffect(() => {
fetchItems();
  }, []);

  const [name, setName] = useState ([]);


const fetchItems =  async () => { 
  const data = await fetch('https://jsonplaceholder.typicode.com/users'
  );

  const names = await data.json();
  //console.log(items);
  setName(names);


}

  return (
    <div>
{name.map(test  => (
  <h1 key={test.id}>{test.name}</h1>
))}
    </div>
  );
}

export default Endpoint1;
