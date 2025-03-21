import React, { useState } from 'react';
import Data from '../utils/Data';
import RestraunentCards, { IsopenRestraunent } from './RestraunentCards';
import useOnlineStatus from '../utils/useOnlineStatus';

const Home = () => {
  const [listofrest, setListofrest] = useState(Data);
  const [search, setSearch] = useState('');
  const [filteredRest, setFilteredRest] = useState(Data);

  const IsOpenrest = IsopenRestraunent(RestraunentCards);
  
  const isonline = useOnlineStatus();
  if (isonline === false) {
    return (<h1>It seems like your internet is off... Please check your internet connection</h1>);
  }

  return (
    <>
      {/* Search & Filter Section */}
      <div className="flex flex-col md:flex-row gap-4 w-full justify-center items-center py-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm md:text-lg hover:bg-blue-600"
          onClick={() => {
            let reqList = listofrest.filter((rest) => rest.info.avgRating > 4.5);
            setFilteredRest(reqList);
          }}
        >
          Top Rated Restaurants
        </button>

        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            className="border border-gray-400 px-4 py-2 rounded-md w-full sm:max-w-md md:max-w-lg"
            placeholder="Search Restaurants..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md text-sm md:text-lg hover:bg-green-600"
            onClick={() => {
              let reqlist = listofrest.filter((rest) =>
                rest.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setFilteredRest(reqlist);
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* Restaurants Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {filteredRest.map((rest, index) => {
          const { id, name, cloudinaryImageId, avgRating, areaName, isOpen } = rest.info;
          console.log(isOpen);
          return (
            <React.Fragment key={index}>
              {isOpen ? (
                <IsOpenrest
                  Id={id}
                  Name={name}
                  Imageid={cloudinaryImageId}
                  rating={avgRating}
                  location={areaName}
                />
              ) : (
                <RestraunentCards
                  Id={id}
                  Name={name}
                  Imageid={cloudinaryImageId}
                  rating={avgRating}
                  location={areaName}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Home;