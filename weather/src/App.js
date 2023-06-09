
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import {BsSearch} from "react-icons/bs";
import {Weather} from "./components/Weather"
import { Spinner } from './components/Spinner';
import logo1 from "./images/background.jpg"
import logo2 from "./videos/Clouds.mp4"
import logo3 from "./videos/Clear.mp4"
import logo4 from "./videos/rain.mp4"
import logo5 from "./videos/thunder.mp4"
import logo6 from "./videos/Snow.mp4"
import logo7 from "./videos/Smoke.mp4"
import logo8 from "./videos/Drizzle.mp4"
import logo9 from "./videos/Haze.mp4"

function App() {

  const videoSources = {
    Thunderstorm: logo5,
    Drizzle: logo8,
    Rain: logo4,
    Snow: logo6,
    Clear: logo3,
    Clouds: logo2,
    Smoke:logo7,
    Haze:logo9,
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
    <div className="container">
       <div className='wbg'>
          {Object.keys(weather).length === 0 && weather.constructor === Object ? (
            <img src={logo1} />
          ) : (
            <video src={videoSources[weather.weather[0].main]} autoPlay muted loop />
          )}
        </div>
<div className='search1'>
  <form onSubmit={FetchWeather} >
<div className='search'>
    <input onChange={(e)=>setCity(e.target.value)} id='search2' type='text' placeholder='Search city'/>
    <button onClick={FetchWeather}><BsSearch id='btn1' size={30}/></button>
    </div>
    
  </form>
</div>

{weather.main &&<Weather data={weather}/>}

     </div>
  );
}
}

export default App;
