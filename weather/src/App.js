
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import {BsSearch} from "react-icons/bs";
import {Weather} from "./components/Weather"
import { Spinner } from './components/Spinner';


function App() {
const[loading,setLoading] = useState(false);
const[city,setCity] = useState("");
const [weather,setWeather]= useState({});
const url = (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=360e96144e8eb0fca116c4be6816e37e`)
const FetchWeather = (event)=>{
  event.preventDefault()
setLoading(true)
axios.get(url).then((res)=>{
  setWeather(res.data)
  })
  setCity('')
  setLoading(false)
}
if(loading){
return <Spinner/>
}
else{


  return (
    <div>
      
     <img className='wbg' src= "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80"/> 
    
<div className='search'>
  <form onSubmit={FetchWeather} className='search1'>
<div>
    <input onChange={(e)=>setCity(e.target.value)} type='text' placeholder='Search city'/>
    </div>
    <button onClick={FetchWeather}><BsSearch size={20}/></button>
  </form>
</div>

{weather.main &&<Weather data={weather}/>}

     </div>
  );
}
}

export default App;
