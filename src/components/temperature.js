import React,{useEffect, useState} from 'react'
import './style.css';
import Weathercard from './weathercard';
const Temp = () => {

    const [searchvalue,setsearch]=useState("delhi")
    const [tempinfo,settemp]=useState({});
  
    const getweather= async()=>{
          try{
            let url= `https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&appid=a9093b18a3242c67f09836394946cd8f`;
            const result =await fetch(url);

            const data =await result.json();
            console.log(data);
            const {temp,humidity,pressure} =data.main;
            const {main : weathermood,icon}=data.weather[0];
            const  {name} =data;
            const {speed} =data.wind;
            const {country,sunset}=data.sys;

            const mynewweather ={
                temp,humidity,pressure,weathermood,name,speed,country,sunset,icon
            };
            settemp(mynewweather);
            console.log(temp);
        }
        catch(error)
        {
            console.log(error);
        }

    };

    useEffect(()=>{
        getweather();
                     },[]);

  return (
    <>
    <div className='wrap'>

        <div className='search'>
<input type='search'  placeholder= 'search..' autoFocus
                  id ='search' className='searchTerm' value={searchvalue} onChange={ e=>setsearch(e.target.value)} />

        <button className='searchButton' type='button'  onClick={getweather}>
            search
        </button>

        </div>
    </div>
  
  <Weathercard  {...tempinfo}/>
   
    </>
  )
}

export default Temp