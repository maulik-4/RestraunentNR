import React, { useState, useEffect } from 'react'
import Data from '../utils/Data'
import RestraunentCards from './RestraunentCards';
import { data } from 'autoprefixer';

const Home = () => {
    const [listofrest, setListofrest] = useState(Data);
    const [search, setSearch] = useState('');
    const [filteredRest, setfilteredRest] = useState(Data);

   

    return (
      <>
      <div className='flex flex-row gap-10  w-full h-10vh justify-center items-center'>
      <div className="filter">
        <button className='h-10v w-10vw' onClick={
            ()=>{
                let reqList = listofrest.filter((rest) =>{
                    return rest.info.avgRating > 4.5;
                })
                setfilteredRest(reqList);

            }
        }> <h6 className='text-[10vw]'>Top Rated Restraunents</h6></button>
      </div>
      <div className="searchBox">
        <input type='text' className='h-[5vh] border-black w-[30vw] ' placeholder='search' value={search} onChange={(e) =>{
            setSearch(e.target.value);
        }} />
        <button onClick={() =>{
            let reqlist = listofrest.filter((rest) =>{
                return rest.info.name.toLowerCase().includes(search.toLowerCase());
            })
            setfilteredRest(reqlist);
        }} > Search</button>
      </div>
      </div>
      <div className='w-full h-full flex flex-wrap justify-center items-center'>
            {
                filteredRest.map((rest, index) => {
                    let name = rest.info.name;
                    let image = rest.info.cloudinaryImageId;
                    let rating = rest.info.avgRating;
                    let locations = rest.info.areaName;
                    let id = rest.info.id;   
                    return <RestraunentCards Id={id}  Name= {name} Imageid = {image} rating={rating} location={locations} key ={index}  />
                })
            }
        </div></>
        
    )
}

export default Home