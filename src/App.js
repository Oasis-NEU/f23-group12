import './App.css';
import { useEffect, useState } from 'react';
import { supabase } from './supabase';

function App() {
  const [groceries, setGrocieries] = useState([]);

  useEffect(() => {
    async function fetchGroceries() {


      let { data: groceries, error } = await supabase
        .from('groceries')
        .select('*')


      if (groceries) {
        setGrocieries(groceries);
      } else {
        console.log(error);
      }
    }
    fetchGroceries();

    //our fetch function
  }, [])

  return <div>
    <h1>Grocery List</h1>
    <ul>
      {groceries.map(({ id, name, price }) => {
        return <li key={id}>{name} - {price}</li>
      })}
    </ul>
  </div>
}

export default App;
