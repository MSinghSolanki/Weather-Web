
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import {BsSearch} from "react-icons/bs";
import {Weather} from "./components/Weather"
import { Spinner } from './components/Spinner';
import logo1 from "./images/weather1.jpg"

function App() {
const[loading,setLoading] = useState(false);
const[city,setCity] = useState("");
const [weather,setWeather]= useState({});
const url = (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=360e96144e8eb0fca116c4be6816e37e`)
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
      <div>
     <img className='wbg' src={logo1} /> 
     </div>
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
