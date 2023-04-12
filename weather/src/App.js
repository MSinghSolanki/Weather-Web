
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import {BsSearch} from "react-icons/bs";
import {Weather} from "./components/Weather"
import { Spinner } from './components/Spinner';
import logo1 from "./videos/bg.mp4"
import logo2 from "./videos/Clouds.mp4"
import logo3 from "./videos/rain.mp4"
import logo4 from "./videos/Clear.mp4"
import logo5 from "./videos/Snow.mp4"
import logo6 from "./videos/thunder.mp4"

function App() {
  const videoSources = {
  Thunderstorm: logo6,
  Rain: logo3,
  Snow: logo5,
  Clear: logo4,
  Clouds: logo2,
};
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
  setLoading(false)
  setCity('')
 
}
if(loading){
return <Spinner/>
}
else{


  return (
    <div>
      <div>
    
     {weather.main && (
            <video
              className="wbg"
              src={videoSources[weather.weather[0].main]}
              autoPlay
              muted
              loop
            />
          )}
    
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
