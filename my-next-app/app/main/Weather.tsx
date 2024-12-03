"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
interface WeatherData{
    icon:string;
    city:string;
    lat:number;
    lon:number;
   temp:number;
   cloud_pct:number;
   feels_like:number;
   humidity:number;
   min_temp:number;
   max_temp:number;
   sunrise:number;
   sunset:number;
    }

    interface Coordinates{
        lat:number;
        lon:number;
        city:string;
        icon:string;
    }
const Weather = () => {
 
    const [data,setData]=useState<WeatherData[]|null>([])
    const coordinates:Coordinates[]=[
        { lat: 51.5074, lon: -0.1278, city:"London" ,icon:"/london.jpg"}, // London
        { lat: 40.7128, lon: -74.006 ,city:"New York",icon:"/new york.jpg"}, // New York
        { lat: 35.6895, lon: 139.6917, city:"Tokyo",icon:"/tokyo.jpg"}, // Tokyo
        { lat: -33.8688, lon: 151.2093, city:"Sydney",icon:"/sydney.jpg" }, // Sydney

    ]


    useEffect(()=>{
     
       const apiKey="AlFUf9QsACmcGl20L2KWWQ==z7HbTGMNVq3irbuB"
       const fetchData=async()=>{

           const requests=coordinates.map(({lat,lon,city,icon})=>
               fetch(`https://api.api-ninjas.com/v1/weather?lat=${lat}&lon=${lon}`,{headers:{"X-Api-Key":apiKey}}).then((response)=>{
return response
.json().then((data)=>({...data,lat,lon,city,icon}))
               })
               
       
           )
           const results=await Promise.all(requests)
           setData(results)
            }
                
            
            fetchData();

},[])
console.log(data)
  
return (
      <main className="h-auto w-full bg-white py-4 ">
        <div className="w-full  grid md:grid-cols-4 grid-cols-2  md:gap-4 gap-3 md:p-[5%] p-2 ">

            {data?.map((weather)=>

          <div className="bg-slate-100 md:h-[60vh] 2xl:h-[70vh] shadow-cyan-200 shadow-md  border-cyan-800 rounded-lg ">

        <div className="min-w-fit min-h-fit rounded-lg ">
            <Image width={400} height={50} src={weather.icon} alt='icon' className='object-fit w-full rounded-t-lg md:h-32 h-20 2xl:h-56'/>
  
    </div>
            <div className='md:p-3 p-1 '>



        <h2 className="md:text-lg font-bold xl:mt-4  pb-1 2xl:text-3xl">{weather.city}</h2>
            <h3 className=' text-wrap md:text-md font-semibold  text-xs 2xl:text-2xl'> Lat:{weather.lat},<br/>Lon:{weather.lon}</h3>
           <ul className=' space-y-0.5 text-xs md:text-md 2xl:text-2xl'>

            <ol>Temp: {weather.temp}°C</ol>
            <ol>Feels Like: {weather.feels_like}°C</ol>
            <ol>Humidity: {weather.humidity}%</ol>
            <ol>Sunrise: {new Date(weather.sunrise*1000).toLocaleTimeString()}</ol>
            <ol>Sunset: {new Date(weather.sunset*1000).toLocaleTimeString()}</ol>



           </ul>
            </div>
          </div>
        )
            
            }
        </div>
      </main> 
      
    )
}

export default Weather