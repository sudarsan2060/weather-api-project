import React, { useEffect, useState } from 'react'

const Weathercard = ({ temp,humidity,pressure,weathermood,name,speed,country,sunset,icon}) => {

     
   const [weathericon,seticon]=useState("");

   useEffect(()=>{
            if(icon)
            {
                switch (icon)
                {
                    case '01d':
                        seticon("wi-day-sunny");
                        break;

                        case '02d':
                        seticon("wi-day-cloudy");
                        break;

                        case '03d':
                        seticon("wi-day-cloudy");
                        break;

                        case '09d':
                        seticon("wi-day-showers");
                        break;

                        case '10d':
                        seticon("wi-day-rain");
                        break;

                        case '11d':
                        seticon("wi-day-thunderstorm");
                        break;

                        case '13d':
                        seticon("wi-day-snow");
                        break;

                        case '50d':
                        seticon("wi-windy");
                        break;

                        case '01n':
                        seticon("wi-night-clear");
                        break;

                        case '02n':
                        seticon("wi-night-alt-cloudy");
                        break;

                        case '03n':
                        seticon("wi-night-alt-cloudy");
                        break;

                        case '09n':
                        seticon("wi-night-alt-showers");
                        break;

                        case '10n':
                        seticon("wi-night-alt-rain");
                        break;

                        case '11n':
                        seticon("wi-night-thunderstorm");
                        break;

                        case '13n':
                        seticon("wi-night-snow");
                        break;

                        case '50n':
                        seticon("wi-windy");
                        break;
                        
                        default:
                        seticon("wi-day-cloudy");
                        break;
                }
            }
   },[icon])

     let sec=sunset;
     let date =new Date(sec*1000);
     let timestr= `${date.getHours()}:${date.getMinutes()}`;
     temp=(temp-273.15).toFixed(2);
  return (
    <>
     <article  className='widget'>
        <div className='weatherIcon'>
            <i className={`wi ${weathericon}`}></i>
            {/* <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="weather icon"  className='weatherIcon'/> */}
        </div>
        <div className='weatherInfo'>
             <div className='temperature'>
                 <span>{temp}&deg;</span>
             </div>

             <div className='description'>
                 <div className='weatherCondition'>{weathermood }</div>
                 <div className='place'>
                     {name},{country}
                 </div>
             </div>
        </div>

        <div className='date'>{new Date().toLocaleString()}</div>
        

        <div className='extra-temp'>
                <div className='temp-info-minmax'>
                    <div className='two-sided-section'>
                        <p><i className= {"wi wi-sunset"}></i></p>
                        <p className='extra-info-leftside'>{timestr}<br/>sunset</p>
                    </div>
                    <div className='two-sided-section'>
                        <p><i className= {"wi wi-humidity"}></i></p>
                        <p className='extra-info-leftside'>{humidity}<br/>humidity</p>
                    </div>
                    
                </div>
                <div className='weather-extra-info'>
                    <div className='two-sided-section'>
                        <p><i className= {"wi wi-rain"}></i></p>
                        <p className='extra-info-leftside'>{pressure} <br/>pressure</p>
                    </div>
                    <div className='two-sided-section'>
                        <p><i className= {"wi wi-strong-wind"}></i></p>
                        <p className='extra-info-leftside'>{speed}<br/>speed</p>
                    </div>
                    
                </div>

        </div>

    </article>
    </>
  )
}

export default Weathercard