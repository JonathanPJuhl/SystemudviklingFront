
import '../App.css';
import React, {useState, useEffect} from 'react';



function Endpoint2() {

  useEffect(() => {
fetchItems();
  }, []);

  const [jokes, setJokes] = useState ([]);


const fetchItems =  async () => { 
  const data = await fetch('https://api.chucknorris.io/jokes/random'
  );

  const jokes = await data.json();
  //console.log(items);
  setJokes(jokes);


}

  return (
    <div>
{jokes.value}



</div>
  );
}

export default Endpoint2;
