import './App.css';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect} from 'react';
import axios from 'axios';
import GridExample from './GridExample';


function App() {
  const [data, setData] = useState([]);

 

  useEffect(()=>{
    fetchAPI();
  },[])

  const fetchAPI = async () =>{
    const res = await axios.get('https://api.imgflip.com/get_memes')
    setData(res.data.data.memes);
    // setIsReload(1)
  }
  
  console.log(data)

  
  

  return (
    <>
    <div className="App">
      <Button variant="primary" onClick={()=>{fetchAPI()}} >Primary</Button>
    </div>
    <div>
      <GridExample data={data}></GridExample>
    </div>
    </>

  );
}

export default App;
