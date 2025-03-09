import React, { useState, useEffect } from 'react'
import Data from '../utils/Data'
import RestraunentCards from './RestraunentCards';

const Home = () => {
    const [listofrest, setListofrest] = useState([]);
    

    useEffect(() => {
        if (Array.isArray(Data)) {
            setListofrest(Data);
        } else {
            console.error("Data is not an array");
        }
    }, []);

    return (
      <>
      <div className="filter">
        <button className='h-10v w-10vw bg-red-500' onClick={
            ()=>{
                let reqList = listofrest.filter((rest) =>{
                    return rest.info.avgRating > 4.5;
                })
                setListofrest(reqList);

            }
        }> <h6 className='text-[10vw]'>Filter</h6></button>
      </div>
      <div className='w-full h-full flex flex-wrap justify-center items-center'>
            {
                listofrest.map((rest, index) => {
                    let name = rest.info.name;
                    let image = rest.info.cloudinaryImageId;
                    let rating = rest.info.avgRating;
                    let locations = rest.info.areaName;
                    return <RestraunentCards  Name= {name} Imageid = {image} rating={rating} location={locations} key ={index}  />
                })
            }
        </div></>
        
    )
}

export default Home