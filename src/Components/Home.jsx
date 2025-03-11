import React, { useState } from 'react';
import Data from '../utils/Data';
import RestraunentCards from './RestraunentCards';

const Home = () => {
  const [listofrest, setListofrest] = useState(Data);
  const [search, setSearch] = useState('');
  const [filteredRest, setFilteredRest] = useState(Data);

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
          return (
            <RestraunentCards
              Id={rest.info.id}
              Name={rest.info.name}
              Imageid={rest.info.cloudinaryImageId}
              rating={rest.info.avgRating}
              location={rest.info.areaName}
              key={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default Home;
